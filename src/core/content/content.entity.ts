import { Column, Entity } from 'typeorm';
import { BaseElementEntity } from '@global/entities';

@Entity()
export class Content extends BaseElementEntity {
  @Column('varchar')
  title: string;

  @Column('nvarchar')
  src: string;

  @Column('nvarchar', { length: 1024 })
  description: string;
}
