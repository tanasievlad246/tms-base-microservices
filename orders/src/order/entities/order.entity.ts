import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BusinessPartner } from 'src/business-partner/entities/business-partner.entity';
import { Address } from 'src/address/entities/address.entity';
import { Parcel } from 'src/parcel/entities/parcel.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => BusinessPartner)
  sender: BusinessPartner;

  @OneToOne(() => BusinessPartner)
  receiver: BusinessPartner;

  @OneToMany(() => Address, (address) => address.order)
  loadings: Address[];

  @OneToMany(() => Address, (address) => address.order)
  unloadings: Address[];

  @OneToMany(() => Parcel, (parcel) => parcel.order)
  goods: Parcel[];

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

  @Column()
  billingUnit: string;

  @Column()
  total: number;

  @Column()
  status: string;
}
