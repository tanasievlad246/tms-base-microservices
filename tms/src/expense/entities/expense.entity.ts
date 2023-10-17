import { ExpenseStatus } from 'src/types/enums';
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

  @Column({
    enum: ExpenseStatus,
  })
  status: ExpenseStatus;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.expenses)
  vehicle: Vehicle;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}