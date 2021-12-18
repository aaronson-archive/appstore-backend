import { AuthModule } from '@core/auth';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyRepository } from './survey.repository';
import { SurveyService } from './survey.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([SurveyRepository]),
        AuthModule
      ],
      controllers: [SurveyController],
      providers: [SurveyService]
})
export class SurveyModule {}
