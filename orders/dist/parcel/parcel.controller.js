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
exports.ParcelController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const parcel_service_1 = require("./parcel.service");
const create_parcel_dto_1 = require("./dto/create-parcel.dto");
const update_parcel_dto_1 = require("./dto/update-parcel.dto");
let ParcelController = class ParcelController {
    constructor(parcelService) {
        this.parcelService = parcelService;
    }
    create(createParcelDto) {
        return this.parcelService.create(createParcelDto);
    }
    findAll() {
        return this.parcelService.findAll();
    }
    findOne(id) {
        return this.parcelService.findOne(id);
    }
    update(updateParcelDto) {
        return this.parcelService.update(updateParcelDto.id, updateParcelDto);
    }
    remove(id) {
        return this.parcelService.remove(id);
    }
};
exports.ParcelController = ParcelController;
__decorate([
    (0, microservices_1.MessagePattern)('createParcel'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_parcel_dto_1.CreateParcelDto]),
    __metadata("design:returntype", void 0)
], ParcelController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllParcel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParcelController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneParcel'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParcelController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateParcel'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_parcel_dto_1.UpdateParcelDto]),
    __metadata("design:returntype", void 0)
], ParcelController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeParcel'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParcelController.prototype, "remove", null);
exports.ParcelController = ParcelController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [parcel_service_1.ParcelService])
], ParcelController);
//# sourceMappingURL=parcel.controller.js.map