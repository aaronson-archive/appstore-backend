import { BaseElementEntity } from '@global/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Account } from '../account/entities';

@Entity()
export class Calendar extends BaseElementEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  DidVisit: boolean;

  @Column()
  Symptom: string;

  @ManyToOne((type) => Account, (account) => account.calendar, { eager: false })
  user: Account;
}

export type SurveyAnswer = {
  answers: string;
};
