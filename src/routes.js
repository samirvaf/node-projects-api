import { Router } from 'express';

import ProjectController from './app/controllers/ProjectController';
import checkIdMiddleware from './app/middlewares/checkId';
import counterMiddleware from './app/middlewares/count';

const routes = new Router();

routes.use(counterMiddleware);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);

routes.put('/projects/:id', checkIdMiddleware, ProjectController.update);
routes.delete('/projects/:id', checkIdMiddleware, ProjectController.delete);
routes.post('/projects/:id/tasks', checkIdMiddleware, ProjectController.edit);

export default routes;
