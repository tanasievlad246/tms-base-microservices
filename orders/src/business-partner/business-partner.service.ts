import { Injectable } from '@nestjs/common';
import { CreateBusinessPartnerDto } from './dto/create-business-partner.dto';
import { UpdateBusinessPartnerDto } from './dto/update-business-partner.dto';

@Injectable()
export class BusinessPartnerService {
  create(createBusinessPartnerDto: CreateBusinessPartnerDto) {
    return 'This action adds a new businessPartner';
  }

  findAll() {
    return `This action returns all businessPartner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessPartner`;
  }

  update(id: number, updateBusinessPartnerDto: UpdateBusinessPartnerDto) {
    return `This action updates a #${id} businessPartner`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessPartner`;
  }
}
