import { Account } from '@core/account/entities';
import { Content } from '@core/content/content.entity';
import { Hospital } from '@core/hospital/entities';
import { Calendar } from 'src/calendar/calendar.entity';
import { Survey } from 'src/survey/survey.entity';

export const entities = [Account, Hospital, Survey, Content, Calendar];
