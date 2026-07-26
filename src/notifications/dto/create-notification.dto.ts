import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export enum NotificationType {
  WELCOME = 'WELCOME',
  MENTION = 'MENTION',
  TASK = 'TASK',
  PROJECT = 'PROJECT',
  COMMENT = 'COMMENT',
  DEADLINE = 'DEADLINE',
}

export class CreateNotificationDto {

  @ApiProperty({
    example: 'TASK',
    enum: NotificationType,
  })
  @IsEnum(NotificationType)
  type!: any;


  @ApiProperty({
    example: 'New task assigned',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;


  @ApiProperty({
    example: 'You have been assigned the authentication task',
  })
  @IsString()
  @IsNotEmpty()
  message!: string;


  @ApiProperty({
    example: 'cm_user_id',
  })
  @IsUUID()
  userId!: string;

}