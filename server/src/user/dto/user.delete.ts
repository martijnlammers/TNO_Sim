import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ReqDelete {
    @ApiProperty()
    @IsEmail()
    email: string;
}


export class ResDelete{

}

