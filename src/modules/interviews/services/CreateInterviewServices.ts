import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Interview from '../infra/typeorm/entities/Interview';
import IInterviewsRepository from '../repositories/IInterviewsRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateInterviewServices {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
  ) {}

  public async execute({
    name,
  }: IRequest): Promise<Interview> {


    const findInterview =
      await this.interviewsRepository.findByName(name);

    if (findInterview) {
      throw new AppError('This interview already exist');
    }

    const interview = await this.interviewsRepository.create({
      name,
    });

    return interview;
  }
}

export default CreateInterviewServices;
