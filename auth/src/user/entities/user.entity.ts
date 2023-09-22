import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  joinDate: Date;

  @Column()
  ownerUser: boolean;

  @Column()
  pwResetToken: string;

  @Column()
  confirmationCode: string;

  @Column()
  confirmed: boolean;

  @Column()
  tenantId: number;
}
