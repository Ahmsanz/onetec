import { Module } from '@nestjs/common';
import { MetaController } from './controllers/meta.controller';
import { MetaService } from './service/meta.service';

@Module({
  controllers: [MetaController],
  providers: [MetaService]
})
export class MetaModule {}
