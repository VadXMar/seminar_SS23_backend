import { IsMongoId } from 'class-validator';

export class FindTodoParam {
  @IsMongoId()
  id: string;
}
