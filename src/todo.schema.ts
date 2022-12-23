import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class Todo {
  id: string;

  @Prop({ required: true, trim: true })
  creator: string;

  @Prop({ required: true, trim: true })
  content: string;

  @Prop({ min: 1, max: 10 })
  priority: number;

  @Prop({ required: true, default: false })
  finished: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

export type TodoDocument = Todo & Document;
