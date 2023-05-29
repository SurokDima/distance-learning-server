import { ICourseEntity } from '@/course/entities/course.entity';
import { ICourseModel } from '@/course/models/course.model';

export const mapCourseEntityToModel = (courseEntity: ICourseEntity): ICourseModel => courseEntity;
