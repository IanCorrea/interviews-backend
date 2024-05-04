import { getRepository, Repository } from 'typeorm';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import ICreateInterviewDTO from '@modules/interviews/dtos/ICreateInterviewDTO';

import Interview from '../entities/Interview';

class InterviewsRepository implements IInterviewsRepository {
  private ormRepository: Repository<Interview>;

  constructor() {
    this.ormRepository = getRepository(Interview);
  }

  public async findById(id: string): Promise<Interview | undefined> {
    const findInterview = await this.ormRepository.findOne({
      where: { id },
    });

    return findInterview;
  }

  public async findByName(name: string): Promise<Interview | undefined> {
    const findInterview = await this.ormRepository.findOne({
      where: { name },
    });

    return findInterview;
  }

  public async findAll(): Promise<Interview[] | []> {
    const allInterviews = await this.ormRepository.find();

    return allInterviews;
  }

  public async create({
    name,
  }: ICreateInterviewDTO): Promise<Interview> {
    const interview = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(interview);

    return interview;
  }
}

export default InterviewsRepository;
