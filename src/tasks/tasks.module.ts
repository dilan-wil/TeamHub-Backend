import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { ActivitiesModule } from 'src/activities/activities.module';

@Module({
  imports: [PrismaModule, NotificationsModule, ActivitiesModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
