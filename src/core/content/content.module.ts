import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { ContentController } from './content.controller';
import { ContentRepository } from './content.repository';
import { ContentService } from './content.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Content]),
    JwtModule.register({ secret: `${process.env.SECRET_KEY}` }),
  ],
  controllers: [ContentController],
  providers: [ContentRepository, ContentService],
  exports: [TypeOrmModule],
})
export class ContentModule {}
