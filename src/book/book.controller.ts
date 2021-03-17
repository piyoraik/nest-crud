import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { InsertResult, UpdateResult } from 'typeorm';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Get()
  async bookAll(): Promise<Book[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async bookFind(@Param('id', new ParseIntPipe()) id): Promise<Book> {
    return await this.service.findOne(id);
  }

  @Post()
  async create(
    @Body(ValidationPipe) book: CreateBookDto,
  ): Promise<InsertResult> {
    return await this.service.create(book);
  }

  @Put(':id/update')
  async update(
    @Param('id', new ParseIntPipe()) id,
    @Body(ValidationPipe) book: UpdateBookDto,
  ): Promise<UpdateResult> {
    return await this.service.update(id, book);
  }
}
