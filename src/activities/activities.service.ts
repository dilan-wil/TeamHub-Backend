import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.activity.findMany({
      include: {
        user: true,
        project: true,
        task: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByProject(projectId: string) {
    return this.prisma.activity.findMany({
      where: {
        projectId,
      },
      include: {
        user: true,
        task: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.activity.findMany({
      where: {
        userId,
      },
      include: {
        project: true,
        task: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(data: {
    type: string;
    description: string;
    userId: string;
    projectId?: string;
    taskId?: string;
  }) {
    return this.prisma.activity.create({
      data,
    });
  }
}
