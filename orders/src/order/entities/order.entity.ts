import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BusinessPartner } from 'src/business-partner/entities/business-partner.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { User } from 'src/user/entities/user.entity';
import { Operation } from 'src/operation/entities/operation.entity';
import { BillingUnits } from 'src/types/enums';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => BusinessPartner)
  sender: BusinessPartner;

  @OneToOne(() => BusinessPartner)
  receiver: BusinessPartner;

  @OneToMany(() => Operation, (operation) => operation.order)
  loadings: Operation[];

  @OneToMany(() => Operation, (operation) => operation.order)
  unloadings: Operation[];

  @OneToOne(() => Vehicle)
  vehicle: Vehicle;

  @OneToOne(() => User)
  creator: User;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  price: number;

  @Column()
  distance: number;

  @Column({
    enum: BillingUnits,
  })
  billingUnit: BillingUnits;

  @Column()
  total: number;

  @Column()
  status: string;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
