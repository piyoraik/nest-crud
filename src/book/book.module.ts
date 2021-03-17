import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
})
export class BookModule {}
