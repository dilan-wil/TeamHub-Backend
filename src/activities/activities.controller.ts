import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ActivitiesService } from './activities.service';

@ApiTags('Activities')
@ApiBearerAuth()
@Controller('activities')
@UseGuards(JwtAuthGuard)
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  @ApiOperation({
    summary: 'Find All ',
  })
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get('project/:projectId')
  @ApiOperation({
    summary: 'Find All By Project Id',
  })
  findByProject(@Param('projectId') projectId: string) {
    return this.activitiesService.findByProject(projectId);
  }

  @Get('user/:userId')
  @ApiOperation({
    summary: 'Find All By User ID',
  })
  findByUser(@Param('userId') userId: string) {
    return this.activitiesService.findByUser(userId);
  }
}
