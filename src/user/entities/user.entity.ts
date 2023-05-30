export interface IUserEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  attendingCoursesIds: string[];
}
