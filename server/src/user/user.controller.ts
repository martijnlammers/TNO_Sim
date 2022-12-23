import { Controller, Post, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import * as dto from './dto/all';
@Controller('/')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user/register')
  registerUser(@Body() body: dto.ReqRegister): dto.ResRegister {
    return this.userService.registerUser(body);
  }

  @Post('user/login')
  loginUser(@Body() body: dto.ReqLogin): dto.ResLogin {
    return this.userService.loginUser(body);
  }

  @Post('users')
  readAllUsers(@Body() body: dto.ReqUsers): dto.ResUsers {
    return this.userService.readAllUsers(body);
  }

  @Post('users/filter/role')
  filterUsersByRole(@Body() body: dto.ReqFilterByRole): dto.ResFilterByRole {
    return this.userService.filterUsersByRole(body);
  }

  @Delete('user/delete')
  deleteUser(@Body() body: dto.ReqDelete): dto.ResFilterByRole {
    return this.userService.deleteUser(body);
  }
}
