"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerController = void 0;
const common_1 = require("@nestjs/common");
const business_partner_service_1 = require("./business-partner.service");
const create_business_partner_dto_1 = require("./dto/create-business-partner.dto");
const update_business_partner_dto_1 = require("./dto/update-business-partner.dto");
let BusinessPartnerController = class BusinessPartnerController {
    constructor(businessPartnerService) {
        this.businessPartnerService = businessPartnerService;
    }
    create(createBusinessPartnerDto) {
        return this.businessPartnerService.create(createBusinessPartnerDto);
    }
    findAll() {
        return this.businessPartnerService.findAll();
    }
    findOne(id) {
        return this.businessPartnerService.findOne(+id);
    }
    update(id, updateBusinessPartnerDto) {
        return this.businessPartnerService.update(+id, updateBusinessPartnerDto);
    }
    remove(id) {
        return this.businessPartnerService.remove(+id);
    }
};
exports.BusinessPartnerController = BusinessPartnerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_partner_dto_1.CreateBusinessPartnerDto]),
    __metadata("design:returntype", void 0)
], BusinessPartnerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusinessPartnerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessPartnerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_partner_dto_1.UpdateBusinessPartnerDto]),
    __metadata("design:returntype", void 0)
], BusinessPartnerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessPartnerController.prototype, "remove", null);
exports.BusinessPartnerController = BusinessPartnerController = __decorate([
    (0, common_1.Controller)('business-partner'),
    __metadata("design:paramtypes", [business_partner_service_1.BusinessPartnerService])
], BusinessPartnerController);
//# sourceMappingURL=business-partner.controller.js.map