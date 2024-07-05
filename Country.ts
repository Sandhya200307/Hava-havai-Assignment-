import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  countryCodeTwo: string;

  @Column()
  countryCodeThree: string;

  @Column()
  mobileCode: number;

  @Column()
  continentId: number;
}
