import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class ReadNotificationDto {
  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  read!: boolean;
}
