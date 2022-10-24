import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  getHello(): string {
    return 'Hello World!';
  }
}
