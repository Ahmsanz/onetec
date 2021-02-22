import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaModule } from './meta/meta.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MetaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
