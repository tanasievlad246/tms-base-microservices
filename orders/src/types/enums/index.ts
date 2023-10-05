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

export enum OperationType {
  LOADING = 'LOADING',
  UNLOADING = 'UNLOADING',
}
