import { Account } from '@core/account/entities';
import { GetUser } from '@core/account/get-Account-decorator';
import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Calendar } from './calendar.entity';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/calendar.dto';

@Controller('calendar')
@UseGuards(AuthGuard())
export class CalendarController {
    private logger = new Logger('calendar');

    constructor(private calendarService: CalendarService) { }
    
    @Get()
    getAllBoard(
        @GetUser() account: Account
        ): Promise<Calendar[]> {
            this.logger.verbose(`User ${account.nickName} trying to get all Calendar`);
            return this.calendarService.getAllCalendars(account);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Calendar> {
        return this.calendarService.getCalendarById(id);
    }

    @Post()
    createBoard(@Body() createCalendarDto: CreateCalendarDto,
    @GetUser() account: Account): Promise<Calendar> {
        this.logger.verbose(`User ${account.nickName} created a new calendar.
        Payload: ${JSON.stringify(createCalendarDto)}`);
        return this.calendarService.createCalendar(createCalendarDto, account);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: number,
    @GetUser() account: Account
    ): Promise<void> {
        return this.calendarService.deleteCalendar(id, account);
    }

    @Patch('/:id')
    updatecalendartatus(
        @Param('id') id: number): Promise<Calendar> {
        return this.calendarService.updateCalendar(id);
    }
}
