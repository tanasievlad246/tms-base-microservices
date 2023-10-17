import { Operation } from 'src/operation/entities/operation.entity';
import { ParcelType } from 'src/types/enums';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Parcel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  length: number;

  @Column()
  width: number;

  @Column()
  qty: number;

  @Column({
    enum: ParcelType,
  })
  type: ParcelType;

  @ManyToOne(() => Operation, (operation) => operation.parcels)
  operation: Operation;

  @Column({
    type: 'text',
    default: () => "current_setting('hermestms.current_tenant')::text",
    nullable: false,
  })
  tenantId: string;
}