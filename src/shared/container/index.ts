import { container } from 'tsyringe';

import '@modules/users/providers';

import IInterviewsRepository from '@modules/interviews/repositories/IInterviewsRepository';
import InterviewsRepository from '@modules/interviews/infra/typeorm/repositories/InterviewsRepository';

import IUserInterviewRepository from '@modules/interviews/repositories/IUserInterviewRepository';
import UserInterviewRepository from '@modules/interviews/infra/typeorm/repositories/UserInterviewRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';


container.registerSingleton<IInterviewsRepository>(
  'InterviewsRepository',
  InterviewsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserInterviewRepository>(
  'UserInterviewRepository',
  UserInterviewRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
