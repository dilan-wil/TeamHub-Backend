import { PartialType } from '@nestjs/swagger';
import { ReadNotificationDto } from './read-notification.dto';

export class UpdateNotificationDto extends PartialType(ReadNotificationDto) {}
