import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Parcel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  length: number;

  @Column()
  width: number;

  @Column()
  qty: number;

  @Column()
  type: string;
}
