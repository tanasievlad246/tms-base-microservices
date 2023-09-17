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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_entity_1 = require("./entities/address.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async create(createAddressDto) {
        const address = new address_entity_1.Address();
        address.street = createAddressDto.street;
        address.number = createAddressDto.number;
        address.city = createAddressDto.city;
        address.country = createAddressDto.country;
        address.zip = createAddressDto.zip;
        address.coords = createAddressDto.coords;
        address.dock = createAddressDto.dock;
        return await this.addressRepository.save(address);
    }
    async findAll() {
        return await this.addressRepository.find();
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AddressService);
//# sourceMappingURL=address.service.js.map