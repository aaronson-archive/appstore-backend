import { createQueryBuilder, EntityRepository, getRepository } from 'typeorm';
import { Content } from './content.entity';

@EntityRepository(Content)
export class ContentRepository {
  public async getMany() {
    return createQueryBuilder()
      .select('content')
      .from(Content, 'content')
      .getMany();
  }
}
