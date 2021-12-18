import { createQueryBuilder, EntityRepository, getRepository } from 'typeorm';
import { Hospital } from '../entities';
import { HospitalInfoDto } from '../dto';

@EntityRepository(Hospital)
export class HospitalRepository {
  public async findOneByGPS(place: HospitalInfoDto) {
    return createQueryBuilder()
      .select('hospital')
      .from(Hospital, 'hospital')
      .where('hospital.longitude = :longitude', { longitude: place.longitude })
      .where('hospital.latitude = :latitude', { latitude: place.latitude })
      .getOne();
  }
}
