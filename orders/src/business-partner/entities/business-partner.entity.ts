import { Address } from 'src/address/entities/address.entity';
import { BusinessPartnerStatus, BusinessPartnerType } from 'src/types/enums';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class BusinessPartner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Address)
  address: Address;

  @Column({
    enum: BusinessPartnerType,
  })
  type: BusinessPartnerType;

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

  @Column({
    enum: BusinessPartnerStatus,
  })
  status: BusinessPartnerStatus;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
