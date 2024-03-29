import { BaseElementEntity } from '@global/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Account } from '../account/entities';
@Entity()
export class Survey extends BaseElementEntity {
  @Column()
  question: string;

  @Column()
  answers: string;

  @Column()
  date: Date;

  @Column()
  DidAnswer: boolean;

  @ManyToOne((type) => Account, (account) => account.Survey, { eager: false })
  user: Account;
}

export type SurveyAnswer = {
  answers: string;
};
