import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  city: string;
  @IsOptional()
  dock: string;
  @IsNotEmpty()
  zip: string;
  @IsOptional()
  coords: string;
  @IsOptional()
  relation: {
    entity: 'order' | 'businessPartner';
    id: number;
  };
}
