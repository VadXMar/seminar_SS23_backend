import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) {}
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    const doc: TodoDocument = await this.todoModel.findOne({ _id: id }).exec();

    if (!doc) {
      throw new NotFoundException();
    }

    return doc;
  }

  async updateOne(id: string, updateProductDto: UpdateTodoDto): Promise<Todo> {
    const doc: TodoDocument = await this.todoModel.findOne({ _id: id }).exec();

    if (!doc) {
      throw new NotFoundException();
    }

    return this.todoModel.findOneAndUpdate({ _id: id }, updateProductDto, {
      new: true,
    });
  }

  async deleteOne(id: string): Promise<Todo> {
    const doc: TodoDocument = await this.todoModel.findOne({ _id: id }).exec();

    if (!doc) {
      throw new NotFoundException();
    }

    return this.todoModel.findOneAndDelete({ _id: id }).exec();
  }
}
