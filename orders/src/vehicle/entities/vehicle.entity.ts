import { Expense } from 'src/expense/entities/expense.entity';
import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryColumn({
    unique: true,
    nullable: false,
  })
  vin: string;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: Date;

  @Column()
  km: number;

  @Column()
  color: string;

  @Column({
    unique: true,
    nullable: false,
  })
  registration: string;

  @Column()
  registrationDate: Date;

  @Column()
  country: string;

  @OneToMany(() => Expense, (expense) => expense.vehicle)
  expenses: Expense[];

  @OneToOne(() => Vehicle)
  @JoinColumn()
  trailer: Vehicle;

  @Column()
  type: string;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
