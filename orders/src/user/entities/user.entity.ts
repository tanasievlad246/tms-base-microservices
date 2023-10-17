import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserType } from 'src/types/enums';

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
  permissions: string;

  @Column({
    enum: UserType,
  })
  type: UserType;

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
