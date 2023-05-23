import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Assignment } from '@/assignment/entities/assignment.entity';
import { User } from '@/user/entities/user.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @ManyToOne(() => User)
  public author: User;

  @ManyToMany(() => Assignment)
  public assignments: Assignment[];
}
