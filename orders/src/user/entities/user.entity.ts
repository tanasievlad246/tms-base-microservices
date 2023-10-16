import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column()
  role: string;

  @Column()
  permissions: string;

  @Column()
  type: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}
