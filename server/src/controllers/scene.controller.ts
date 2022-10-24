import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from '../services/database.service';

@Controller('simulation')
export class SceneController {
  constructor(private readonly appService: AppService) {}

  @Post('scene')
  createScene(): string {
    return this.appService.getHello();
  }

  @Get('scene')
  getScene(): string {
    return this.appService.getHello();
  }

  @Put('scene')
  updateScene(): string {
    return this.appService.getHello();
  }

  @Delete('scene')
  deleteScene(): string {
    return this.appService.getHello();
  }

}
