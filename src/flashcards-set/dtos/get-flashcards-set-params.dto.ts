import { IsUUID } from 'class-validator';

export class GetFlashcardsSetByIdParams {
  @IsUUID()
  public id: string;
}
