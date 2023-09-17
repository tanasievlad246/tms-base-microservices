import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';
export declare class BusinessPartnerService {
    create(createBusinessPartnerDto: CreateBusinessPartnerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinessPartnerDto: UpdateBusinessPartnerDto): string;
    remove(id: number): string;
}
