import { Order } from 'src/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Order, (order) => order.goods)
  order: Order;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
