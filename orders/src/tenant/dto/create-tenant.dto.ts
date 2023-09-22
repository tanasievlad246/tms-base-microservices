export class CreateTenantDto {
  name: string;
  subdomain: string;
  subscribed: boolean;
  subscription: string;
  renewalDate: Date;
  tenantId: string;
}
