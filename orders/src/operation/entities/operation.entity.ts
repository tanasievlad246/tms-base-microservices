import { Address } from 'src/address/entities/address.entity';
import { Order } from 'src/order/entities/order.entity';
import { Parcel } from 'src/parcel/entities/parcel.entity';
import { OperationType } from 'src/types/enums';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Address)
  address: Address;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  type: OperationType;

  @OneToMany(() => Parcel, (parcel) => parcel.operation)
  parcels: Parcel[];

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
