import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendar } from './calendar.entity';
import { CalendarRepository } from './calender.repository';
import { CreateCalendarDto } from './dto/calendar.dto';
import { Account } from '../account/entities/account.entity';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarRepository)
    private CalendarRepository: CalendarRepository,
  ) {}

  async getAllCalendars(account: Account): Promise<Calendar[]> {
    const query = await this.CalendarRepository.createQueryBuilder('Calendar');

    query.where('Calendar.userId = :userId', { userId: account.id });

    const Calendars = await query.getMany();

    return Calendars;
  }

  async getCalendarById(id: number): Promise<Calendar> {
    const found = await this.CalendarRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Calendar ${id}`);
    }

    return found;
  }

  createCalendar(
    createCalendarDto: CreateCalendarDto,
    account: Account,
  ): Promise<Calendar> {
    return this.CalendarRepository.createCalendar(createCalendarDto, account);
  }

  async deleteCalendar(id: number, account: Account): Promise<void> {
    const result = await this.CalendarRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Calendar with id ${id}`);
    }
  }

  async updateCalendar(id: number): Promise<Calendar> {
    const Calendar = await this.getCalendarById(id);

    await this.CalendarRepository.save(Calendar);

    return Calendar;
  }
}
