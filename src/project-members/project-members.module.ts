import { Module } from '@nestjs/common';
import { ProjectMembersService } from './project-members.service';
import { ProjectMembersController } from './project-members.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ActivitiesModule } from 'src/activities/activities.module';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [PrismaModule, ActivitiesModule, NotificationsModule],
  controllers: [ProjectMembersController],
  providers: [ProjectMembersService],
})
export class ProjectMembersModule {}
