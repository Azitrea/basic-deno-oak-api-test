import { RouterContext, Request, Response, Router } from "https://deno.land/x/oak/mod.ts";
import { User } from "../models/user.model.ts";
import userService from '../service/user.service.ts';

const router = new Router();

// getAllUsers
router.get('/list', async ({ request, response }: RouterContext) => { 
  try {
    const users: User[] = await userService.getAllUsers();
    response.body = users;
  } catch(err) {
    handleErrors(request, response, err);
  }
});

// createUser
router.post('/', async ({ request, response }: RouterContext) => { 
  try {
    const userID: number = await userService.createUser(await request.body().value);
    response.body = { userID };
  } catch(err) {
    handleErrors(request, response, err);
  }
});

// getOneUser
router.get('/:id', async ({ request, response, params }: RouterContext) => {
  try {
    const id = params.id;
    const user: User = await userService.getOneUser(Number(id));
    response.body = user;
  } catch(err) {
    handleErrors(request, response, err);
  }
});

// updateUser
router.put('/', async ({ request, response }: RouterContext) => {
  try {
    const userID: number = await userService.updateUser(await request.body().value);
    response.body = { userID };
  } catch(err) {
    handleErrors(request, response, err);
  }
});

// deleteUser
router.delete('/:id', async ({ request, response, params }: RouterContext) => {
  try {
    const id = params.id;
    const userID: number = await userService.deleteUser(Number(id))
    response.body = { userID };
  } catch(err) {
    handleErrors(request, response, err);
  }
});

const handleErrors = (request: Request, response: Response, error: Error): void => {
  console.log('Error', error);
  response.status = 400;
  response.body = "Something went wrong: " + error.message;
  return;
}

export default router;
