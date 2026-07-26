import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ProjectRole } from '../../../generated/prisma/client';

export class UpdateProjectMemberDto {
  @ApiProperty({
    enum: ProjectRole,
    example: 'MANAGER',
  })
  @IsEnum(ProjectRole)
  role!: ProjectRole;
}
