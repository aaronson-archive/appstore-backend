import { BaseElementEntity } from "@global/entities";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

}

export type SurveyAnswer = {
    answers: string;
}