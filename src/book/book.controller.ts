import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { InsertResult } from 'typeorm';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Get()
  async bookAll(): Promise<Book[]> {
    return await this.service.findAll();
  }

  @Post()
  async create(
    @Body(ValidationPipe) book: CreateBookDto,
  ): Promise<InsertResult> {
    return await this.service.create(book);
  }
}
