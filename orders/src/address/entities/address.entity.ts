import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  zip: string;

  @Column({ nullable: false })
  coords: string;

  @Column({ nullable: true })
  dock: string;
}
