import { injectable, inject } from 'tsyringe';

import IUserInterviewRepository from '../repositories/IUserInterviewRepository';
import UserInterview from '../infra/typeorm/entities/UserInterview';

interface IRequest {
  interview_id: string;
}

@injectable()
class ListUserInterviewService {
  constructor(
    @inject('UserInterviewRepository')
    private userInterviewRepository: IUserInterviewRepository,
  ) {}

  public async execute({
    interview_id,
  }: IRequest): Promise<UserInterview[]> {

    const userInterview = await this.userInterviewRepository.findAll(interview_id);

    return userInterview;
  }
}

export default ListUserInterviewService;
