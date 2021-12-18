import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from '@core/account/repository';
import { Account } from '@core/account/entities';
import { AccountController } from './auth.controller';
import { AuthService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    JwtModule.register({ secret: `${process.env.SECRET_KEY}` }),
  ],
  controllers: [AccountController],
  providers: [AccountRepository, AuthService],
  exports: [TypeOrmModule],
})
export class AuthModule {}
