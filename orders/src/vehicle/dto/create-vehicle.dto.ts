import {
  IsAlphanumeric,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateVehicleDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  vin: string;
  @IsString()
  @IsNotEmpty()
  make: string;
  @IsNotEmpty()
  @IsString()
  model: string;
  @IsDate({
    message: 'year must be a date',
  })
  @IsNotEmpty()
  year: Date;
  @IsNumber()
  @IsNotEmpty()
  km: number;
  @IsString()
  @IsNotEmpty()
  color: string;
  @IsAlphanumeric()
  @IsNotEmpty()
  registration: string;
  @IsDate()
  @IsNotEmpty()
  registrationDate: Date;
  @IsString()
  @IsNotEmpty()
  country: string;
  @IsString()
  @IsNotEmpty()
  type: string;
}
