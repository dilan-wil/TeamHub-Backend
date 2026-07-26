import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { TaskPriority, TaskStatus } from '../../../generated/prisma/client';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Implement JWT Authentication',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    example: 'Implement login, register and refresh token.',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    example: 'cm_project_id',
  })
  @IsUUID()
  projectId!: string;

  @ApiProperty({
    example: 'cm_user_id',
  })
  @IsUUID()
  assigneeId!: string;

  @ApiProperty({
    enum: TaskStatus,
    default: TaskStatus.TODO,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @ApiProperty({
    example: '2026-08-25',
  })
  @IsDateString()
  dueDate!: string;

  @ApiProperty({
    example: 8,
  })
  @IsInt()
  @Min(1)
  @Max(1000)
  estimatedHours!: number;

  @ApiPropertyOptional({
    example: ['backend', 'nestjs', 'jwt'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
