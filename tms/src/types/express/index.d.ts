// to make the file a module and avoid the TypeScript error
// export {};

export interface UserPayload {
  id: string;
  email: string;
  role: string;
  permissions: string[];
  tenantId: string;
}

declare global {
  namespace Express {
    export interface Request {
      user: UserPayload;
      tenantId: string;
    }
  }
}
