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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const address_entity_1 = require("./entities/address.entity");
let AddressService = class AddressService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async createSchema(schemaName) {
        try {
            await this.dataSource.createQueryRunner().createSchema(schemaName, true);
            return {
                message: `Schema ${schemaName} created`,
            };
        }
        catch (error) {
            return {
                message: error.message,
            };
        }
    }
    async syncSchema(schemaName) {
        try {
            await this.dataSource.query(`SET search_path TO ${schemaName}`);
            await this.dataSource.synchronize(false);
            return {
                message: `Schema ${schemaName} synchronized`,
            };
        }
        catch (error) {
            return {
                message: error.message,
            };
        }
    }
    create(createAddressDto) {
        return this.dataSource.getRepository(address_entity_1.Address).create(createAddressDto);
    }
    findAll() {
        return `This action returns all address`;
    }
    findOne(id) {
        return `This action returns a #${id} address`;
    }
    update(id, updateAddressDto) {
        console.log(updateAddressDto);
        return `This action updates a #${id} address`;
    }
    remove(id) {
        return `This action removes a #${id} address`;
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AddressService);
//# sourceMappingURL=address.service.js.map