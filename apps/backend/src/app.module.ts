import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LetterModule } from './letter/letter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LetterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
