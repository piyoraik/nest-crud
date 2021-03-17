import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { InsertResult, Repository } from 'typeorm';
import { CreateBookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly book: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.book.find();
  }

  async create(book: CreateBookDto): Promise<InsertResult> {
    return await this.book.insert(book);
  }
}
