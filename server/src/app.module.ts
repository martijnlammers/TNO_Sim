import { Module } from '@nestjs/common';
import { SceneController } from './scene/scene.controller';
import { UserController } from './user/user.controller';
import { SessionController } from './session/session.controller';
import { SceneService } from './scene/scene.service';
import { SessionService } from './session/session.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [UserController, SceneController, SessionController],
  providers: [SceneService, SessionService, UserService],
})
export class AppModule {}
