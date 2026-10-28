import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';

export interface User {
  id: string;
  email: string;
  name: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  create(dto: CreateUserDto): User {
    const user = { id: crypto.randomUUID(), ...dto };
    this.users.push(user);
    return user;
  }
}
