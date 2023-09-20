import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  invoiceNumber: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.expenses)
  vehicle: Vehicle;
}
