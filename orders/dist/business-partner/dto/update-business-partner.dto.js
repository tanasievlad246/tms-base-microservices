"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessPartnerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_business_partner_dto_1 = require("./create-business-partner.dto");
class UpdateBusinessPartnerDto extends (0, mapped_types_1.PartialType)(create_business_partner_dto_1.CreateBusinessPartnerDto) {
}
exports.UpdateBusinessPartnerDto = UpdateBusinessPartnerDto;
//# sourceMappingURL=update-business-partner.dto.js.map