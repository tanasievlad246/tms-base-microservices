"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const address_module_1 = require("./address/address.module");
const typeorm_1 = require("@nestjs/typeorm");
const tenant_module_1 = require("./tenant/tenant.module");
const vehicle_module_1 = require("./vehicle/vehicle.module");
const expense_module_1 = require("./expense/expense.module");
const order_module_1 = require("./order/order.module");
const user_module_1 = require("./user/user.module");
const parcel_module_1 = require("./parcel/parcel.module");
const business_partner_module_1 = require("./business-partner/business-partner.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'password',
                logging: true,
                entities: ['dist/**/*.entity.{ts,js}'],
            }),
            address_module_1.AddressModule,
            tenant_module_1.TenantModule,
            vehicle_module_1.VehicleModule,
            expense_module_1.ExpenseModule,
            order_module_1.OrderModule,
            user_module_1.UserModule,
            parcel_module_1.ParcelModule,
            business_partner_module_1.BusinessPartnerModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map