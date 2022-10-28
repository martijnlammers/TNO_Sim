import { Module } from '@nestjs/common';
import { SceneController } from './scene/scene.controller';
import { EventController } from './event/event.controller';
import { EvidenceController } from './evidence/evidence.controller';
import { UserController } from './user/user.controller';
import { SessionController } from './session/session.controller';
import { EventService } from './event/event.service';
import { EvidenceService } from './evidence/evidence.service';
import { SceneService } from './scene/scene.service';
import { SessionService } from './session/session.service';
import { UserService } from './user/user.service';
import { ParticipantController } from './participant/participant.controller';
import { ParticipantService } from './participant/participant.service';

@Module({
  imports: [],
  controllers: [EventController, EvidenceController, SceneController, UserController, SessionController, ParticipantController],
  providers: [EventService, EvidenceService, SceneService, SessionService, UserService, ParticipantService],
})
export class AppModule {}
