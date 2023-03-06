import { Module } from '@nestjs/common';
import { AuthorizationModule } from './authorization/authorization.module.js';
import { ClientModule } from './client/client.module.js';
import { RefreshTokenModule } from './refresh-token/refresh-token.module.js';

@Module({
  imports: [AuthorizationModule, ClientModule, RefreshTokenModule],
})
export class ReplModule {}