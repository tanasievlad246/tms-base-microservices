import { NestMiddleware } from '@nestjs/common';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
  tenantId: string;
}

export class CurrentUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    if (!req.session?.jwt) {
      return next();
    }

    try {
      const payload = jwt.verify(
        req.session.jwt,
        process.env.JWT_KEY!,
      ) as UserPayload;
      req.currentUser = payload;
    } catch (error) {}

    next();
  }
}
