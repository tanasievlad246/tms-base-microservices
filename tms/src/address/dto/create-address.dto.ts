import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsOptional()
  @IsString()
  dock: string;
  @IsNotEmpty()
  @IsString()
  zip: string;
  @IsOptional()
  @IsString()
  coords: string;
  @IsOptional()
  @IsObject({
    message:
      'relation must be an object with entity property (order or businessPartner) and id property (number)',
  })
  relation: {
    entity: 'order' | 'businessPartner';
    id: number;
  };
}
