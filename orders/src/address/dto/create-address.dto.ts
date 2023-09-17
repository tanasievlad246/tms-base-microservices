import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  street: string;
  @IsNotEmpty()
  number: string;
  @IsNotEmpty()
  zip: string;
  @IsNotEmpty()
  coords: string;
  dock: string;
}
