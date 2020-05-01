import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({mensagem: "Parabéns :D, aplicação respondendo com sucesso!"});
});

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = { name, email };

  return response.json(user);
});

export default routes;
