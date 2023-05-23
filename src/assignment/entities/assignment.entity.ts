import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public type: string;

  @Column()
  public task_id: string;
}
