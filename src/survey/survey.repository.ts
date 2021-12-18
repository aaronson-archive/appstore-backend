import { EntityRepository, Repository } from "typeorm";
import { CreateSurveyDto } from "./dto/survey.dto";
import { Survey } from "./survey.entity";

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {
    
    async createSurvey(createSurveyDto: CreateSurveyDto) : Promise<Survey> {
        const { question } = createSurveyDto;

        const survey = this.create({
            question
        })

        await this.save(survey);
        return survey;
    }
}