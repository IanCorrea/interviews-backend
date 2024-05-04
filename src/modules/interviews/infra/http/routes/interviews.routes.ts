import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import InterviewsController from '../controllers/InterviewsController';
import UserInterviewController from '../controllers/UserInterviewController';

const interviewsRouter = Router();
const interviewsController = new InterviewsController();
const usersInterviewController = new UserInterviewController();

interviewsRouter.use(ensureAuthenticated);

interviewsRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  interviewsController.index,
);

interviewsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  interviewsController.create,
);

interviewsRouter.get(
  '/:interview_id',
  celebrate({
    [Segments.PARAMS]: {
      interview_id: Joi.string().uuid().required(),
    },
  }),
  usersInterviewController.index,
);

interviewsRouter.post(
  '/:interview_id',
  celebrate({
    [Segments.PARAMS]: {
      interview_id: Joi.string().uuid().required(),
    },
  }),
  usersInterviewController.create,
);

interviewsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersInterviewController.delete,
);



export default interviewsRouter;
