import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserInterviewServices from '@modules/interviews/services/CreateUserInterviewServices';
import ListUserInterviewService from '@modules/interviews/services/ListUserInterviewService';
import DeleteUserInterviewService from '@modules/interviews/services/DeleteUserInterviewService';

export default class UserInterviewController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { interview_id } = request.params;

    const allUserInterview = container.resolve(ListUserInterviewService);

    const userInterview = await allUserInterview.execute({
      interview_id,
    });

    return response.json(userInterview);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { interview_id } = request.params;
    const { name, status, feedback, rating } = request.body;

    const createUserInterview = container.resolve(CreateUserInterviewServices);

    const userInterview = await createUserInterview.execute({
      interview_id,
      name,
      status,
      feedback,
      rating,
    });

    return response.json(userInterview);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserInterview = container.resolve(DeleteUserInterviewService);

    const userInterview = await deleteUserInterview.execute({
      id,
    });

    return response.json(userInterview);
  }
}
