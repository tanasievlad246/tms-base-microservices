"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateParcelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_parcel_dto_1 = require("./create-parcel.dto");
class UpdateParcelDto extends (0, mapped_types_1.PartialType)(create_parcel_dto_1.CreateParcelDto) {
}
exports.UpdateParcelDto = UpdateParcelDto;
//# sourceMappingURL=update-parcel.dto.js.map