import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class AssignTaskDto {
  @ApiProperty({
    example: 'cm_user_id',
  })
  @IsUUID()
  assigneeId!: string;
}
