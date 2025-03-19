import { Module } from '@nestjs/common';
import { TecnologiaController } from './tecnologia.controller';
import { TecnologiaPrisma } from './tecnologia.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [TecnologiaController],
  providers: [TecnologiaPrisma],
  imports: [DbModule]
})
export class TecnologiaModule {}
