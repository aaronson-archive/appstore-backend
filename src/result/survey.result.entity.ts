import { BaseElementEntity } from "@global/entities";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Board extends BaseElementEntity {
    @PrimaryGeneratedColumn()
    SurveyId: number;

    @Column()
    question: string;

    @Column()
    answers: SurveyResultAnswer[];

    @Column()
    date: Date;
}

export type SurveyResultAnswer = {
    answers: string;
    count: number;
    present: number;
}