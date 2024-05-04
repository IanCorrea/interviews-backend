import ICreateInterviewDTO from '../dtos/ICreateInterviewDTO';
import ICreateUserInterviewDTO from '../dtos/ICreateUserInterviewDTO';
import Interview from '../infra/typeorm/entities/Interview';
import UserInterview from '../infra/typeorm/entities/UserInterview';


export default interface IInterviewsRepository {
  create(data: ICreateInterviewDTO): Promise<Interview>;
  findById(id: string): Promise<Interview | undefined>;
  findByName(name: string): Promise<Interview | undefined>;
  findAll(): Promise<Interview[] | []>;
}
