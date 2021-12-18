import { EntityRepository, Repository } from 'typeorm';
import { CreateCalendarDto } from './dto/calendar.dto';
import { Calendar } from './calendar.entity';
import { Account } from '@core/account/entities';

@EntityRepository(Calendar)
export class CalendarRepository extends Repository<Calendar> {
  createCalendar(createCalendarDto: CreateCalendarDto, account: Account): Promise<Calendar> {
      throw new Error('Method not implemented.');
  }
  async createCalendars(createCalendarDto: CreateCalendarDto): Promise<Calendar> {
    const { title, description } = createCalendarDto;

    const diary = this.create({
        title,
        description
    });

    await this.save(diary);
    return diary;
  }
}
