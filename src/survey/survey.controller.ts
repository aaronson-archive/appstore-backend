import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateSurveyDto } from './dto/survey.dto';
import { Survey } from './survey.entity';
import { SurveyService } from './survey.service';
import { Account } from '@core/account/entities';
import { GetUser } from '@core/account/get-Account-decorator';

@Controller('survey')
@UseGuards(AuthGuard())
export class SurveyController {
  private logger = new Logger('survey');

  constructor(private surveyService: SurveyService) {}

  @Get()
  getAllSurvey(@GetUser() account: Account): Promise<Survey[]> {
    this.logger.verbose(`User ${account.nickName} trying to get all Survey`);
    return this.surveyService.getAllSurveys();
  }

  @Get('/:id')
  getSurveyById(@Param('id') id: number): Promise<Survey> {
    return this.surveyService.getSurveyById(id);
  }

  @Post()
  createSurvey(
    @Body() createSurveyDto: CreateSurveyDto,
    @GetUser() account: Account,
  ): Promise<Survey> {
    this.logger.verbose(`User ${account.nickName} created a new Survey.
        Payload: ${JSON.stringify(createSurveyDto)}`);
    return this.surveyService.createSurvey(createSurveyDto);
  }

  @Delete('/:id')
  deleteSurvey(@Param('id') id: number): Promise<void> {
    return this.surveyService.deleteSurvey(id);
  }
}
