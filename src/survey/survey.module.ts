import { Account } from '@core/account/entities';
import { AuthModule } from '@core/auth';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyRepository } from './survey.repository';
import { SurveyService } from './survey.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), AuthModule],
  controllers: [SurveyController],
  providers: [SurveyRepository, SurveyService],
  exports: [TypeOrmModule],
})
export class SurveyModule {}
