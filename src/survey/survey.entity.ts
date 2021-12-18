import { BaseElementEntity } from "@global/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Account } from "./../core/account/entities";
@Entity()
export class Survey extends BaseElementEntity {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    question: string;

    @Column()
    answers: SurveyAnswer[];

    @Column()
    date: Date;

    @Column()
    DidAnswer: boolean;

    @ManyToOne(type => Account, account => account.Survey, { eager: false })
    user: Account;
}

export type SurveyAnswer = {
    answers: string;
}