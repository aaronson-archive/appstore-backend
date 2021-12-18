import { IsNotEmpty } from "class-validator";

export class CreateSurveyDto {
    @IsNotEmpty()
    question: string;

    @IsNotEmpty()
    answers: string;
}