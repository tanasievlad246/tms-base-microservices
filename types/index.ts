export enum UserType {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DRIVER = 'DRIVER',
    OWNER = 'OWNER'
};

export enum UserPermissions {
    CREATE = 'CREATE',
    READ = 'READ',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
};

export enum SubscriptionType {
    FREE = 'FREE',
    BASIC = 'BASIC',
    PREMIUM = 'PREMIUM',
    CORPORATE = 'CORPORATE',
    CUSTOM = 'CUSTOM'
}

export enum BillingUnits {
    KM = 'KM',
    MILE = 'MILE',
    WHOLE = 'WHOLE'
}

export enum OrderStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    DISPUTE = 'DISPUTE'
}

export enum VehicleType {
    TRUCK = 'TRUCK',
    VAN = 'VAN',
    CAR = 'CAR',
}

export enum VehicleStatus {
    BROKEN = 'BROKEN',
    WORKING = 'WORKING',
    MAINTENANCE = 'MAINTENANCE',
    REPAIR = 'REPAIR',
}

export enum ParcelType {
    DOCUMENT = 'DOCUMENT',
    PACKAGE = 'PACKAGE',
    PALLET = 'PALLET',
    CONTAINER = 'CONTAINER',
    OTHER = 'OTHER',
    EUROPALLET = 'EUROPALLET',
}

export enum ExpenseStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    UNPAID = 'UNPAID',
    DISPUTE = 'DISPUTE',
}

export enum BusinessPartnerType {
    SELF = 'SELF',
    HAULIER = 'HAULIER',
    CLIENT = 'CLIENT',
    SUPPLIER = 'SUPPLIER',
    OTHER = 'OTHER',
}

export enum BusinessPartnerStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    DISPUTE = 'DISPUTE',
}
