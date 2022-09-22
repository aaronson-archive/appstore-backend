import { Account } from '@core/account/entities';
import { AuthModule } from '@core/auth';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyRepository } from './survey.repository';
import { SurveyService } from './survey.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Account]),
    AuthModule,
  ],
  controllers: [SurveyController],
  providers: [SurveyRepository, SurveyService],
  exports: [TypeOrmModule],
})
export class SurveyModule {}
