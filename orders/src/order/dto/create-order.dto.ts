import { IsArray, IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { Parcel } from 'src/parcel/entities/parcel.entity';
import { Address } from 'src/address/entities/address.entity';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  senderId: number;
  @IsNumber()
  @IsNotEmpty()
  receiverId: number;
  @IsArray()
  @IsNotEmpty()
  loadings: Address[];
  @IsArray()
  @IsNotEmpty()
  unloadings: Address[];
  @IsArray()
  @IsNotEmpty()
  goods: Parcel[];
  @IsNumber()
  @IsNotEmpty()
  vehicleId: number;
  @IsDate()
  @IsNotEmpty()
  startTime: Date;
  @IsDate()
  @IsNotEmpty()
  endTime: Date;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  distance: number;
  @IsNumber()
  @IsNotEmpty()
  billingUnit: string;
}
