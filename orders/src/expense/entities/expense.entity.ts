import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

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
}
