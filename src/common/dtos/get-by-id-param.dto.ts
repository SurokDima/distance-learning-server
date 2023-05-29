import { IsUUID } from 'class-validator';

export class GetByIdParams {
  @IsUUID()
  public id: string;
}
