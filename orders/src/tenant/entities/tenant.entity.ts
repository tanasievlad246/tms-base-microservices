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
  subscribed: boolean;

  @Column()
  subscription: string;

  @Column()
  renewalDate: Date;
}
