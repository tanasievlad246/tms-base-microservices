"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationType = exports.BusinessPartnerStatus = exports.BusinessPartnerType = exports.ExpenseStatus = exports.ParcelType = exports.VehicleStatus = exports.VehicleType = exports.OrderStatus = exports.BillingUnits = exports.SubscriptionType = exports.UserPermissions = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["MANAGER"] = "MANAGER";
    UserType["DRIVER"] = "DRIVER";
    UserType["OWNER"] = "OWNER";
})(UserType || (exports.UserType = UserType = {}));
;
var UserPermissions;
(function (UserPermissions) {
    UserPermissions["CREATE"] = "CREATE";
    UserPermissions["READ"] = "READ";
    UserPermissions["UPDATE"] = "UPDATE";
    UserPermissions["DELETE"] = "DELETE";
})(UserPermissions || (exports.UserPermissions = UserPermissions = {}));
;
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["FREE"] = "FREE";
    SubscriptionType["BASIC"] = "BASIC";
    SubscriptionType["PREMIUM"] = "PREMIUM";
    SubscriptionType["CORPORATE"] = "CORPORATE";
    SubscriptionType["CUSTOM"] = "CUSTOM";
})(SubscriptionType || (exports.SubscriptionType = SubscriptionType = {}));
var BillingUnits;
(function (BillingUnits) {
    BillingUnits["KM"] = "KM";
    BillingUnits["MILE"] = "MILE";
    BillingUnits["WHOLE"] = "WHOLE";
})(BillingUnits || (exports.BillingUnits = BillingUnits = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["IN_PROGRESS"] = "IN_PROGRESS";
    OrderStatus["COMPLETED"] = "COMPLETED";
    OrderStatus["CANCELLED"] = "CANCELLED";
    OrderStatus["DISPUTE"] = "DISPUTE";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType["TRUCK"] = "TRUCK";
    VehicleType["VAN"] = "VAN";
    VehicleType["CAR"] = "CAR";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
var VehicleStatus;
(function (VehicleStatus) {
    VehicleStatus["BROKEN"] = "BROKEN";
    VehicleStatus["WORKING"] = "WORKING";
    VehicleStatus["MAINTENANCE"] = "MAINTENANCE";
    VehicleStatus["REPAIR"] = "REPAIR";
})(VehicleStatus || (exports.VehicleStatus = VehicleStatus = {}));
var ParcelType;
(function (ParcelType) {
    ParcelType["DOCUMENT"] = "DOCUMENT";
    ParcelType["PACKAGE"] = "PACKAGE";
    ParcelType["PALLET"] = "PALLET";
    ParcelType["CONTAINER"] = "CONTAINER";
    ParcelType["OTHER"] = "OTHER";
    ParcelType["EUROPALLET"] = "EUROPALLET";
})(ParcelType || (exports.ParcelType = ParcelType = {}));
var ExpenseStatus;
(function (ExpenseStatus) {
    ExpenseStatus["PENDING"] = "PENDING";
    ExpenseStatus["PAID"] = "PAID";
    ExpenseStatus["UNPAID"] = "UNPAID";
    ExpenseStatus["DISPUTE"] = "DISPUTE";
})(ExpenseStatus || (exports.ExpenseStatus = ExpenseStatus = {}));
var BusinessPartnerType;
(function (BusinessPartnerType) {
    BusinessPartnerType["SELF"] = "SELF";
    BusinessPartnerType["HAULIER"] = "HAULIER";
    BusinessPartnerType["CLIENT"] = "CLIENT";
    BusinessPartnerType["SUPPLIER"] = "SUPPLIER";
    BusinessPartnerType["OTHER"] = "OTHER";
})(BusinessPartnerType || (exports.BusinessPartnerType = BusinessPartnerType = {}));
var BusinessPartnerStatus;
(function (BusinessPartnerStatus) {
    BusinessPartnerStatus["ACTIVE"] = "ACTIVE";
    BusinessPartnerStatus["INACTIVE"] = "INACTIVE";
    BusinessPartnerStatus["SUSPENDED"] = "SUSPENDED";
    BusinessPartnerStatus["DISPUTE"] = "DISPUTE";
})(BusinessPartnerStatus || (exports.BusinessPartnerStatus = BusinessPartnerStatus = {}));
var OperationType;
(function (OperationType) {
    OperationType["LOADING"] = "LOADING";
    OperationType["UNLOADING"] = "UNLOADING";
})(OperationType || (exports.OperationType = OperationType = {}));
