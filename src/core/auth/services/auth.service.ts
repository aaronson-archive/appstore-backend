import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { pbkdf2Sync } from 'crypto';
import { AccountRepository } from '@core/account/repository';
import { AuthDto } from '../dto';

@Injectable()
export class AuthService {
  constructor(private account: AccountRepository, private jwt: JwtService) {}

  async auth(auth: AuthDto) {
    const account = await this.account.findOneByPhone(auth.phone);
    console.log('aa', account);
    if (!account) {
      throw new BadReqeustException();
    } else {
      const hash = pbkdf2Sync(
        auth.password,
        account.encKey,
        131072,
        64,
        'sha512',
      ).toString('base64');
      if (hash === account.password) {
        return {
          token: this.jwt.sign({ id: account.id }),
        };
      } else {
        throw new UnauthenticatedException();
      }
    }
  }
}

export class BadReqeustException extends HttpException {
  constructor() {
    super('Bad Request', HttpStatus.BAD_REQUEST);
  }
}

export class UnauthenticatedException extends HttpException {
  constructor() {
    super('Unauthenticated', HttpStatus.UNAUTHORIZED);
  }
}
