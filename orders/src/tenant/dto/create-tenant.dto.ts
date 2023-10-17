import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { SubscriptionType } from 'src/types/enums';

export class CreateTenantDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  subdomain: string;
  @IsBoolean()
  @IsNotEmpty()
  subscribed: boolean;
  @IsNotEmpty()
  @IsString()
  @IsEnum(SubscriptionType)
  subscription: SubscriptionType;
}
