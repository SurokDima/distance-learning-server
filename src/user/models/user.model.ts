export interface IUserModel {
  id: string;
  auth0Id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  attendingCoursesIds: string[];
}
