import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Country } from './Country';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  countryId: number;

  @Column()
  isActive: boolean;

  @Column()
  lat: number;

  @Column()
  long: number;

  @OneToOne(() => Country, (country) => country.id)
  @JoinColumn()
  country: Country;
}
