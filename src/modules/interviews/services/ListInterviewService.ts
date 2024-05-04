import { injectable, inject } from 'tsyringe';

import Interview from '../infra/typeorm/entities/Interview';
import IInterviewsRepository from '../repositories/IInterviewsRepository';

@injectable()
class ListInterviewService {
  constructor(
    @inject('InterviewsRepository')
    private interviewsRepository: IInterviewsRepository,
  ) {}

  public async execute(): Promise<Interview[]> {

    const interviews = await this.interviewsRepository.findAll();

    return interviews;
  }
}

export default ListInterviewService;
