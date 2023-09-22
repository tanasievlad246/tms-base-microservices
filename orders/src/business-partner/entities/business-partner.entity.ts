import { Address } from 'src/address/entities/address.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class BusinessPartner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Address)
  address: Address;

  @Column()
  type: string;

  @Column()
  email: string;

  @Column()
  website: string;

  @Column()
  phone: number;

  @Column()
  taxId: string;

  @Column()
  registrationNumber: string;

  @Column()
  createdAt: Date;

  @Column()
  status: string;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
