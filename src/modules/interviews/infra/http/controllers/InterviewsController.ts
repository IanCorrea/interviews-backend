import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateInterviewServices from '@modules/interviews/services/CreateInterviewServices';
import ListInterviewService from '@modules/interviews/services/ListInterviewService';

export default class InterviewsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const allInterview = container.resolve(ListInterviewService);

    const userInterview = await allInterview.execute();

    return response.json(userInterview);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createInterview = container.resolve(CreateInterviewServices);

    const appointment = await createInterview.execute({
      name
    });

    return response.json(appointment);
  }
}
