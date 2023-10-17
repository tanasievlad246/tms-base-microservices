import { IsArray, IsDate, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Parcel } from 'src/parcel/entities/parcel.entity';
import { Operation } from 'src/operation/entities/operation.entity';
import { BillingUnits } from 'src/types/enums';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  senderId: number;
  @IsNumber()
  @IsNotEmpty()
  receiverId: number;
  @IsArray()
  @IsNotEmpty()
  loadings: Operation[];
  @IsArray()
  @IsNotEmpty()
  unloadings: Operation[];
  @IsArray()
  @IsNotEmpty()
  goods: Parcel[];
  @IsNumber()
  @IsNotEmpty()
  vehicleId: string;
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
  @IsEnum(BillingUnits)
  billingUnit: BillingUnits;
}
