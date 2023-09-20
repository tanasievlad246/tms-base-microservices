"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceFactory = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const databaseService_1 = require("./databaseService");
exports.dataSourceFactory = {
    [common_1.Scope.DEFAULT]: {
        provide: 'data_source',
        useFactory: () => null,
    },
    [common_1.Scope.REQUEST]: {
        provide: 'data_source',
        inject: [core_1.REQUEST, databaseService_1.DatabaseService],
        useFactory: async (databaseService, request) => {
            console.log(request.body);
            const instance = databaseService.getDBDataSource(request.body.schemaName);
            return instance;
        },
    },
};
//# sourceMappingURL=databaseProvider.js.map