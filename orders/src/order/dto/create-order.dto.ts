import { Address } from 'cluster';
import { BusinessPartner } from 'src/business-partner/entities/business-partner.entity';
import { Parcel } from 'src/parcel/entities/parcel.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

export class CreateOrderDto {
  sender: BusinessPartner;
  receiver: BusinessPartner;
  loadings: Address[];
  unloadings: Address[];
  goods: Parcel[];
  vehicle: Vehicle;
  startTime: Date;
  endTime: Date;
  price: number;
  distance: number;
  billingUnit: string;
  total: number;
  status: string;
}
