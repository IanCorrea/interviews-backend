import { injectable, inject } from 'tsyringe';

import IUserInterviewRepository from '../repositories/IUserInterviewRepository';
import UserInterview from '../infra/typeorm/entities/UserInterview';

interface IRequest {
  id: string;
}

@injectable()
class DeleteUserInterviewService {
  constructor(
    @inject('UserInterviewRepository')
    private userInterviewRepository: IUserInterviewRepository,
  ) {}

  public async execute({
    id,
  }: IRequest): Promise<void> {

    await this.userInterviewRepository.delete(id);
  }
}

export default DeleteUserInterviewService;
