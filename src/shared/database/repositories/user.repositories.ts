import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UserCreateArgs) {
    const user = this.prismaService.user.create(createDto);

    return user;
  }

  findByEmail(findUnique: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(findUnique);
  }
}
