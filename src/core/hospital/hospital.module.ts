import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalService } from './services';
import { Hospital } from './entities';
import { HospitalRepository } from './repository';
import { HospitalController } from './hospital.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])],
  controllers: [HospitalController],
  providers: [HospitalRepository, HospitalService],
  exports: [TypeOrmModule],
})
export class HospitalModule {}
