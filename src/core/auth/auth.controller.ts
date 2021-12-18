import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './services';

@Controller('account')
export class AccountController {
  constructor(private account: AuthService) {}

  @Post('/auth')
  auth(@Body() info: AuthDto) {
    return this.account.auth(info);
  }
}
