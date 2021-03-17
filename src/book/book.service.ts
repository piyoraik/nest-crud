import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly book: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.book.find();
  }

  async findOne(id: number): Promise<Book> {
    return await this.book.findOne({ id: id });
  }

  async create(book: CreateBookDto): Promise<InsertResult> {
    return await this.book.insert(book);
  }

  async update(id: number, book: UpdateBookDto): Promise<UpdateResult> {
    return await this.book.update(id, book);
  }
}
