import { IsNotEmpty } from "class-validator";

export class CreateCalendarDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    DidVisit: string;
}