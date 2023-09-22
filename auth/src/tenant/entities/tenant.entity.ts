import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subdomain: string;

  @Column()
  country: string;

  @Column()
  subscribed: boolean;

  @Column()
  subscription: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column()
  renewalDate: Date;

  @Column()
  address: string;
}
