import { Module } from '@nestjs/common';
import { LetterController } from './letter.controller';
import { LetterService } from './letter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

@Module({
  controllers: [LetterController],
  providers: [LetterService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class LetterModule {}
