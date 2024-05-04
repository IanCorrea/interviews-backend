import { getRepository, Repository } from 'typeorm';

import IUserInterviewRepository from '@modules/interviews/repositories/IUserInterviewRepository';
import ICreateInterviewDTO from '@modules/interviews/dtos/ICreateInterviewDTO';

import UserInterview from '../entities/UserInterview';
import ICreateUserInterviewDTO from '@modules/interviews/dtos/ICreateUserInterviewDTO';


class UserInterviewRepository implements IUserInterviewRepository {
  private ormRepository: Repository<UserInterview>;

  constructor() {
    this.ormRepository = getRepository(UserInterview);
  }

  public async findById(id: string): Promise<UserInterview | undefined> {
    const findInterview = await this.ormRepository.findOne({
      where: { id },
    });

    return findInterview;
  }

  public async findAll(id: string): Promise<UserInterview[] | []> {
    const allUsersInterview = await this.ormRepository.find({
      where: { interview_id: id }
    });

    return allUsersInterview;
  }

  public async create({
    interview_id,
    name,
    status,
    feedback,
    rating,
  }: ICreateUserInterviewDTO): Promise<UserInterview> {
    const userinterview = this.ormRepository.create({
      interview_id,
      name,
      status,
      feedback,
      rating,
    });

    await this.ormRepository.save(userinterview);

    return userinterview;
  }

  public async delete(id: string): Promise<void>{
    await this.ormRepository.delete(id);
  }
}

export default UserInterviewRepository;
