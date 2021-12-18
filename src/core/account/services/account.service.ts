import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { AccountRepository } from '../repository';
import { CreateAccountDto } from '../dto';

@Injectable()
export class AccountService {
  constructor(private account: AccountRepository, private jwt: JwtService) {}

  async create(info: CreateAccountDto) {
    const user = await this.account.findOneByPhone(info.phone);

    const buffer = randomBytes(64).toString('base64');

    const encryptPassword =
      info.password &&
      pbkdf2Sync(info.password, buffer, 131072, 64, 'sha512').toString(
        'base64',
      );

    if (user) {
      throw new ConflictException();
    } else {
      const user = await this.account.create({
        ...info,
        password: encryptPassword,
        encKey: buffer,
        phoneVerify: false,
      });
      return user;
    }
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflictException extends HttpException {
  constructor() {
    super('Data Exists already', HttpStatus.CONFLICT);
  }
}
