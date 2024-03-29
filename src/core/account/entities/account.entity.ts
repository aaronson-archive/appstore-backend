import { Column, Entity, OneToMany } from 'typeorm';
import { BaseElementEntity } from '@global/entities';
import { Survey } from '../../survey/survey.entity';
import { Calendar } from '../../calendar/calendar.entity';
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

  @OneToMany(() => Survey, (survey) => survey.user, { eager: true })
  Survey: Survey[];

  @OneToMany(() => Calendar, (calendar) => calendar.user, { eager: true })
  calendar: Calendar;
}
