import { ApiProperty } from '@nestjs/swagger';

import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { ProjectStatus, TaskPriority } from "../../../generated/prisma/client"

export class CreateProjectDto {
  @ApiProperty({
    example: 'Website redesign',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'Redesign company website',
  })
  @IsString()
  description!: string;

  @ApiProperty({
    enum: ProjectStatus,
    default: 'PLANNING',
  })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @ApiProperty({
    enum: TaskPriority,
    default: 'MEDIUM',
  })
  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @ApiProperty({
    example: '2026-08-01',
  })
  @IsDateString()
  startDate!: string;

  @ApiProperty({
    example: '2026-12-01',
  })
  @IsDateString()
  dueDate!: string;

  @ApiProperty({
    required: false,
    example: 'linear-gradient(...)',
  })
  @IsOptional()
  @IsString()
  gradient?: string;
}
