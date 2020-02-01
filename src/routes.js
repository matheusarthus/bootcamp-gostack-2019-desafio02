import { Router } from 'express';
import User from './app/models/User';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const { email } = req.body;

  console.log(email);

  const user = await User.findOne({ where: { email } });

  console.log('passou');

  return res.json(user);
});

routes.post('/sessions', SessionController.store);

export default routes;
