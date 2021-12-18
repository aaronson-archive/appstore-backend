import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateSurveyDto } from './dto/survey.dto';
import { Survey } from './survey.entity';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
    constructor(private surveyService: SurveyService) {}

    @Get()
    getAllSurvey(): Promise<Survey[]> {
        return this.surveyService.getAllSurveys();
    }

    @Get('/:id')
    getSurveyById(@Param('id') id: number): Promise<Survey> {
        return this.surveyService.getSurveyById(id);
    }

    @Post()
    createSurvey(@Body() createSurveyDto: CreateSurveyDto): Promise<Survey> {
        return this.surveyService.createSurvey(createSurveyDto);
    }

    @Delete('/:id')
    deleteSurvey(@Param('id') id: number,
    ): Promise<void> {
        return this.surveyService.deleteSurvey(id);
    }
}
