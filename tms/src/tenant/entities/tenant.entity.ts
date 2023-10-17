import { SubscriptionType } from 'src/types/enums';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  schema: 'public',
  name: 'tenants',
})
export class Tenant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  subdomain: string;

  @Column()
  subscribed: boolean;

  @Column({
    enum: SubscriptionType,
  })
  subscription: SubscriptionType;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  renewalDate: Date;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
