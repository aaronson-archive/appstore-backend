/* eslint-disable prettier/prettier */
import { createQueryBuilder, EntityRepository, getRepository } from 'typeorm';
import { Account } from '../entities';
import { CreateAccountDto } from '../dto';

@EntityRepository(Account)
export class AccountRepository {
  public async create(payload: CreateAccountDto): Promise<Account> {
    return await getRepository(Account).save(payload);
  }

  public async findOneByPhone(phone: string) {
    return createQueryBuilder()
      .select('account')
      .from(Account, 'account')
      .where('account.phone = :phone', { phone: phone })
      .getOne();
  }
}
