import { Expense } from 'src/expense/entities/expense.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  vin: string;

  @Column({ length: 100 })
  make: string;

  @Column({ length: 100 })
  model: string;

  @Column({ length: 100 })
  year: string;

  @Column({ length: 100 })
  km: number;

  @Column({ length: 100 })
  color: string;

  @Column({ length: 100 })
  registration: string;

  @Column({ length: 100 })
  registrationDate: Date;

  @Column({ length: 100 })
  country: string;

  @OneToMany(() => Expense, (expense) => expense.vehicle)
  expenses: Expense[];

  @OneToOne(() => Vehicle)
  @JoinColumn()
  trailer: Vehicle;
}
