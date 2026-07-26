import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ProjectMembersService } from './project-members.service';
import { CreateProjectMemberDto } from './dto/create-project-member.dto';
import { UpdateProjectMemberDto } from './dto/update-project-member.dto';

@ApiTags('Project Members')
@ApiBearerAuth()
@Controller('projects/:projectId/members')
@UseGuards(JwtAuthGuard)
export class ProjectMembersController {
  constructor(private readonly projectMembersService: ProjectMembersService) {}

  @Get()
  @ApiOperation({
      summary: 'Get All Members By Project ID',
    })
  findAll(@Param('projectId') projectId: string) {
    return this.projectMembersService.findAll(projectId);
  }

  @Post()
  @ApiOperation({
      summary: 'Add Member To Project',
    })
  addMember(
    @Param('projectId') projectId: string,

    @Body() dto: CreateProjectMemberDto,
  ) {
    return this.projectMembersService.addMember(
      projectId,

      dto,
    );
  }

  @Patch(':id')
  @ApiOperation({
      summary: 'Update Member Role',
    })
  updateRole(
    @Param('id') id: string,

    @Body() dto: UpdateProjectMemberDto,
  ) {
    return this.projectMembersService.updateRole(
      id,

      dto,
    );
  }

  @Delete(':id')
  @ApiOperation({
      summary: 'Remove Member From Project',
    })
  remove(@Param('id') id: string) {
    return this.projectMembersService.remove(id);
  }
}
