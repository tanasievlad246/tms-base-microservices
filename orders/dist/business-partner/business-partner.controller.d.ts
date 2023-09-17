import { BusinessPartnerService } from './business-partner.service';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';
export declare class BusinessPartnerController {
    private readonly businessPartnerService;
    constructor(businessPartnerService: BusinessPartnerService);
    create(createBusinessPartnerDto: CreateBusinessPartnerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessPartnerDto: UpdateBusinessPartnerDto): string;
    remove(id: string): string;
}
