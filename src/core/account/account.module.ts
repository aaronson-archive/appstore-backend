import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities';
import { AccountController } from './account.controller';
import { AccountRepository } from './repository';
import { AccountService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    JwtModule.register({ secret: `${process.env.SECRET_KEY}` }),
  ],
  controllers: [AccountController],
  providers: [AccountRepository, AccountService],
  exports: [TypeOrmModule],
})
export class AccountModule {}
