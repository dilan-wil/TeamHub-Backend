import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectMemberDto } from './dto/create-project-member.dto';
import { UpdateProjectMemberDto } from './dto/update-project-member.dto';

@Injectable()
export class ProjectMembersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(projectId: string) {
    return this.prisma.projectMember.findMany({
      where: {
        projectId,
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            role: true,
          },
        },
      },
    });
  }

  async addMember(projectId: string, dto: CreateProjectMemberDto) {
    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: dto.userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const existing = await this.prisma.projectMember.findFirst({
      where: {
        projectId,
        userId: dto.userId,
      },
    });

    if (existing) {
      throw new BadRequestException('User already belongs to this project');
    }

    return this.prisma.projectMember.create({
      data: {
        projectId,

        userId: dto.userId,

        role: dto.role,
      },

      include: {
        user: true,
      },
    });
  }

  async updateRole(id: string, dto: UpdateProjectMemberDto) {
    const member = await this.prisma.projectMember.findUnique({
      where: {
        id,
      },
    });

    if (!member) {
      throw new NotFoundException('Project member not found');
    }

    return this.prisma.projectMember.update({
      where: {
        id,
      },

      data: {
        role: dto.role,
      },

      include: {
        user: true,
      },
    });
  }

  async remove(id: string) {
    const member = await this.prisma.projectMember.findUnique({
      where: {
        id,
      },
    });

    if (!member) {
      throw new NotFoundException('Project member not found');
    }

    await this.prisma.projectMember.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Member removed successfully',
    };
  }
}