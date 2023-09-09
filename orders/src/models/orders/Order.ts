import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}