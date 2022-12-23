import { ApiProperty } from '@nestjs/swagger';

export class AllUsers {
    @ApiProperty()
    skip: number;

    @ApiProperty()
    take: number;
}

export class UsersPage{


}

