import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class PointService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPoint(userId: string) {
    return await this.prismaService.userPoints.findUnique({
      where: {
        userId,
      },
    });
  }
}
