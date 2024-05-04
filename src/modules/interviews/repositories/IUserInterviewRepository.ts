import ICreateUserInterviewDTO from '../dtos/ICreateUserInterviewDTO';
import UserInterview from '../infra/typeorm/entities/UserInterview';


export default interface IUserInterviewRepository {
  create(data: ICreateUserInterviewDTO): Promise<UserInterview>;
  findById(id: string): Promise<UserInterview | undefined>;
  findAll(id: string): Promise<UserInterview[] | []>;
  delete(id: string): Promise<void>;
}
