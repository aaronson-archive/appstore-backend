import { Body, Controller, Get } from '@nestjs/common';
import { HospitalInfoDto } from './dto';
import { HospitalService } from './services';

@Controller('hospital')
export class HospitalController {
  constructor(private gps: HospitalService) {}

  @Get('/')
  HospitalOne(@Body() gps: HospitalInfoDto) {
    return this.gps.getHospital(gps);
  }
}
