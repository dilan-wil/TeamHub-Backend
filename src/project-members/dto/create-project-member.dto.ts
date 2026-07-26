import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsUUID } from 'class-validator';
import { ProjectRole } from '../../../generated/prisma/client';

export class CreateProjectMemberDto {
  @ApiProperty({
    example: 'cm123456',
  })
  @IsUUID()
  userId!: string;

  @ApiProperty({
    enum: ProjectRole,
    example: 'MEMBER',
  })
  @IsEnum(ProjectRole)
  role!: ProjectRole;
}
