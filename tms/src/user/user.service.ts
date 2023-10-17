import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DataSource } from 'typeorm';
import { TenantService } from 'src/tenant/tenant.service';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly tenantService: TenantService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto, tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      await this.tenantService.setCurrentTenantOnRepository(userRepo, tenantId);

      // check if user already exists
      // if user exists, throw error with status code 400
      // if user does not exist, create user
      const { password, email } = createUserDto;

      const existingUser = await userRepo.findOneBy({ email });

      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await hash(password, 10);

      createUserDto.password = hashedPassword;

      const user = userRepo.create(createUserDto);

      return await userRepo.save(user);
    });
  }

  async signIn(email: string, password: string, tenantId: string) {
    // generate token
    // return token as http cookie
    return await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      await this.tenantService.setCurrentTenantOnRepository(userRepo, tenantId);
      const user = await userRepo.findOneBy({ email });

      if (!user) {
        throw new Error('User not found');
      }

      if (user.password !== password) {
        throw new Error('Invalid password');
      }

      const token = await this.jwtService.signAsync({
        id: user.id,
        email: user.email,
        permissions: user.permissions,
        tenantId: user.tenantId,
      });

      return token;
    });
  }

  async findAll(tenantId: string) {
    return await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      await this.tenantService.setCurrentTenantOnRepository(userRepo, tenantId);
      const users = await userRepo.find();
      return users;
    });
  }

  async findOneByEmail(email: string) {
    return await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      const user = await userRepo.findOneBy({ email });
      return user;
    });
  }
}
