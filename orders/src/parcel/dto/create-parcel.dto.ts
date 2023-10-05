import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateParcelDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0.1)
  height: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(0.1)
  weight: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(0.1)
  length: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(0.1)
  width: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  qty: number;
  @IsNotEmpty()
  @IsString()
  type: string;
}
