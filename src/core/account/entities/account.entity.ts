import { Column, Entity, OneToMany } from 'typeorm';
import { BaseElementEntity } from '@global/entities';
import { Survey } from './../../../survey/survey.entity';

@Entity()
export class Account extends BaseElementEntity {
  @Column('varchar')
  phone: string;

  @Column('varchar')
  password: string;

  @Column('nvarchar', { length: 12 })
  nickName: string;

  @Column('int')
  age: number;

  @Column('varchar')
  encKey?: string;

  @Column('boolean')
  phoneVerify?: boolean;

  @Column('boolean')
  privacyCheck: boolean;

  @OneToMany(type => Survey, survey => survey.user, { eager: true})
  Survey: Survey[];
}
