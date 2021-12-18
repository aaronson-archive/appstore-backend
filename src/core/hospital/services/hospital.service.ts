import { Injectable } from '@nestjs/common';
import { HospitalInfoDto } from '../dto';
import { HospitalRepository } from '../repository';

@Injectable()
export class HospitalService {
  constructor(private hospital: HospitalRepository) {}

  async getHospital(gps: HospitalInfoDto) {
    return await this.hospital.findOneByGPS(gps);
  }
}
