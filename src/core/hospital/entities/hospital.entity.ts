import { Column, Entity } from 'typeorm';
import { BaseElementEntity } from '@global/entities';

@Entity()
export class Hospital extends BaseElementEntity {
  @Column('varchar')
  longitude: string;

  @Column('varchar')
  latitude: string;

  @Column('varchar')
  hospitalName: string;

  @Column('varchar')
  open: string;

  @Column('nvarchar')
  description?: string;
}
