import { Address } from 'src/address/entities/address.entity';
export declare class BusinessPartner {
    id: number;
    name: string;
    address: Address;
    type: string;
    email: string;
    website: string;
    phone: number;
    taxId: string;
    registrationNumber: string;
    createdAt: Date;
    status: string;
}
