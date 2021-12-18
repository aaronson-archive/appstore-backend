import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountDto } from './dto';
import { AccountService } from './services';

@Controller('account')
export class AccountController {
  constructor(private account: AccountService) {}

  @Post('/create')
  create(@Body() info: CreateAccountDto) {
    return this.account.create(info);
  }
}
