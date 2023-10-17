import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Address } from 'src/address/entities/address.entity';
import { BusinessPartnerType } from 'src/types/enums';

export class CreateBusinessPartnerDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsObject({
    message: 'address must be an Address object',
  })
  address: Address;
  @IsNotEmpty()
  @IsString()
  @IsEnum(BusinessPartnerType)
  type: BusinessPartnerType;
  @IsString()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  website: string;
  @IsString()
  @IsOptional()
  phone: number;
  @IsString()
  @IsOptional()
  taxId: string;
  @IsString()
  @IsOptional()
  registrationNumber: string;
}
