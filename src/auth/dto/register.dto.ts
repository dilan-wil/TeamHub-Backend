import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { Role } from '../../../generated/prisma/client';


export class RegisterDto {

  @ApiProperty({
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name!: string;


  @ApiProperty({
    example: 'john@gmail.com',
  })
  @IsEmail()
  email!: string;


  @ApiProperty({
    example: 'Engineering',
    required: false,
  })
  @IsOptional()
  @IsString()
  department?: string;


  @ApiProperty({
    example: 'MEMBER',
    enum: Role,
  })
  @IsEnum(Role)
  role!: Role;

}