import { Module } from '@nestjs/common';
import { SceneController } from './scene/scene.controller';
import { UserController } from './user/user.controller';
import { SessionController } from './session/session.controller';
import { SceneService } from './scene/scene.service';
import { SessionService } from './session/session.service';
import { UserService } from './user/user.service';
import { PrefabController } from './prefab/prefab.controller'
import { UnityService } from './unity/unity.service';
import { UnityController } from './unity/prefab.controller';

@Module({
  imports: [],
  controllers: [PrefabController, UserController, SceneController, SessionController, UnityController],
  providers: [SceneService, SessionService, UserService, UnityService],
})
export class AppModule {}
