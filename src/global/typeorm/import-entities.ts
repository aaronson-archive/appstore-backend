import { Account } from '@core/account/entities';
import { Content } from '@core/content/content.entity';
import { Hospital } from '@core/hospital/entities';
import { Calendar } from '@core/calendar/calendar.entity';
import { Survey } from '@core/survey/survey.entity';

export const entities = [Account, Hospital, Survey, Content, Calendar];
