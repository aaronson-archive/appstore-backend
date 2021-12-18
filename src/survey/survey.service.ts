import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSurveyDto } from './dto/survey.dto';
import { Survey } from './survey.entity';
import { SurveyRepository } from './survey.repository';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyRepository)
    private SurveyRepository: SurveyRepository,
  ) {}

  async getAllSurveys(): Promise<Survey[]> {
    const query = await this.SurveyRepository.createQueryBuilder('Survey');

    const Surveys = await query.getMany();

    return Surveys;
  }

  async getSurveyById(Id: number): Promise<Survey> {
    const found = await this.SurveyRepository.findOne(Id);

    if (!found) {
      throw new NotFoundException(`Can't find Survey ${Id}`);
    }
    return found;
  }

  createSurvey(createSurveyDto: CreateSurveyDto): Promise<Survey> {
    return this.SurveyRepository.createSurvey(createSurveyDto);
  }
}
