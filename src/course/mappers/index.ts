import { ICourseDto } from '@/course/dtos/course.dto';
import { ICourseWithAuthorModel } from '@/course/models/course.model';
import { mapUserModelToUserDto } from '@/user/mappers';

export const mapCourseWithAuthorModelToDto = ({ author, ...restCourse }: ICourseWithAuthorModel): ICourseDto => ({
  ...restCourse,
  author: mapUserModelToUserDto(author),
});
