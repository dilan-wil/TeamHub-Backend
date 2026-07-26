import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectMembersModule } from './project-members/project-members.module';
import { TasksModule } from './tasks/tasks.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ActivitiesModule } from './activities/activities.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma.service';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    AuthModule, UsersModule, ProjectsModule, ProjectMembersModule, TasksModule, NotificationsModule, ActivitiesModule, DashboardModule, PrismaModule, CommonModule, EmailModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, EmailService],
})
export class AppModule {}
