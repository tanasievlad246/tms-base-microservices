import {
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { Address } from 'src/address/entities/address.entity';
import { Parcel } from 'src/parcel/entities/parcel.entity';
import { OperationType } from 'src/types/enums';

export class CreateOperationDto {
  @IsObject()
  @IsNotEmpty()
  address: Address;
  @IsDate()
  @IsNotEmpty()
  startTime: Date;
  @IsDate()
  @IsNotEmpty()
  endTime: Date;
  @IsEnum(OperationType)
  @IsNotEmpty()
  @IsString()
  type: OperationType;
  @IsArray()
  @IsNotEmpty()
  parcels: Parcel[];
  @IsNumber()
  orderId: number;
}
