import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Interview from '../infra/typeorm/entities/Interview';
import IUserInterviewRepository from '../repositories/IUserInterviewRepository';
import IInterviewsRepository from '../repositories/IInterviewsRepository';

interface IRequest {
  interview_id: string;
  name: string;
  status: string;
  feedback: string;
  rating: number
}

@injectable()
class CreateUserInterviewServices {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,

    @inject('UserInterviewRepository')
    private userInterviewRepository: IUserInterviewRepository,
  ) {}

  public async execute({
    interview_id,
    name,
    status,
    feedback,
    rating,
  }: IRequest): Promise<Interview> {

    const findInterview =
      await this.interviewsRepository.findById(interview_id);

    if (!findInterview) {
      throw new AppError('This interview do not exist');
    }

    const interview = await this.userInterviewRepository.create({
      interview_id,
      name,
      status,
      feedback,
      rating,
    });

    return interview;
  }
}

export default CreateUserInterviewServices;
