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
var TenantConnectionManager_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantConnectionManager = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let TenantConnectionManager = TenantConnectionManager_1 = class TenantConnectionManager {
    constructor() {
        this.connections = {};
    }
    createConnection(tenantName) {
        return (this.connections[tenantName] = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'mysqluser',
            password: 'password',
            database: tenantName,
            logging: true,
            entities: ['dist/models/**/*.ts'],
        }));
    }
    static getInstance() {
        if (!TenantConnectionManager_1._instance) {
            TenantConnectionManager_1._instance = new TenantConnectionManager_1();
        }
        return TenantConnectionManager_1._instance;
    }
    getConnection(tenantName) {
        if (this.connections[tenantName]) {
            return Promise.resolve(this.connections[tenantName].isInitialized
                ? this.connections[tenantName]
                : this.connections[tenantName].initialize());
        }
        return Promise.resolve(this.createConnection(tenantName).initialize());
    }
    syncSchema(tenantName) {
        try {
            if (this.connections[tenantName]) {
                this.connections[tenantName].synchronize(false);
                return Promise.resolve();
            }
            return Promise.reject('No tennant found');
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    getConnections() {
        return this.connections;
    }
};
exports.TenantConnectionManager = TenantConnectionManager;
exports.TenantConnectionManager = TenantConnectionManager = TenantConnectionManager_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TenantConnectionManager);
//# sourceMappingURL=connectionManager.js.map