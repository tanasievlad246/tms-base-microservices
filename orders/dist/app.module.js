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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const address_module_1 = require("./address/address.module");
const parcel_module_1 = require("./parcel/parcel.module");
const order_module_1 = require("./order/order.module");
const user_module_1 = require("./user/user.module");
const business_partner_module_1 = require("./business-partner/business-partner.module");
const vehicle_module_1 = require("./vehicle/vehicle.module");
const file_module_1 = require("./file/file.module");
const expense_module_1 = require("./expense/expense.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 3306,
                username: process.env.DB_USERNAME || 'mysqluser',
                password: process.env.DB_PASSWORD || 'password',
                database: 'default_db',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            address_module_1.AddressModule,
            parcel_module_1.ParcelModule,
            order_module_1.OrderModule,
            user_module_1.UserModule,
            business_partner_module_1.BusinessPartnerModule,
            vehicle_module_1.VehicleModule,
            file_module_1.FileModule,
            expense_module_1.ExpenseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map