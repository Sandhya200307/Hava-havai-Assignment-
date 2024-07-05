// src/entity/Airport.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { City } from './City';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  icaoCode: string;

  @Column()
  iataCode: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  latitudeDeg: number;

  @Column()
  longitudeDeg: number;

  @Column()
  elevationFt: number;

  @OneToOne(() => City, (city) => city.id)
  @JoinColumn()
  address: City;
}
