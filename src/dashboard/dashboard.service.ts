import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getDashboard(userId: string) {
    const [
      totalProjects,
      totalTasks,
      completedTasks,
      notifications,
      recentActivities,
      myProjects,
    ] = await Promise.all([
      this.prisma.project.count(),

      this.prisma.task.count(),

      this.prisma.task.count({
        where: {
          status: 'DONE',
        },
      }),

      this.prisma.notification.count({
        where: {
          userId,
          read: false,
        },
      }),

      this.prisma.activity.findMany({
        take: 10,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          user: true,
          project: true,
          task: true,
        },
      }),

      this.prisma.project.count({
        where: {
          OR: [
            {
              ownerId: userId,
            },
            {
              members: {
                some: {
                  userId,
                },
              },
            },
          ],
        },
      }),
    ]);

    const progress =
      totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    return {
      statistics: {
        totalProjects,
        myProjects,
        totalTasks,
        completedTasks,
        progress,
        unreadNotifications: notifications,
      },
      recentActivities,
    };
  }
}
