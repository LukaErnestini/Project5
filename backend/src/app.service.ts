import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello() {
    // Create a test user
    const user = await this.prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
      },
    });
    return `Hello ${user.name}!`;
  }
}
