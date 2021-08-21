import { User } from "../models/user.model.ts";
import userService from '../service/user.service.ts';

const getAllUsers = async ({ request, response }: { request: any, response: any }) => { 
  const users: User[] = await userService.getAllUsers();
  response.body = users;
};

const createUser = async ({ request, response }: { request: any, response: any }) => { 
  const userID: number = await userService.createUser(request.body);
  response.body = userID;
};

const getOneUser = async ({ request, response, params }: { request: any, response: any, params: { id: string } }) => {
  const user: User = await userService.getOneUser(+params.id);
  response.body = user;
};

const updateUser = async ({ request, response, params }: { request: any, response: any, params: { id: string } }) => {
  const userID: number = await userService.updateUser(request.body);
  response.body = userID;
};

const deleteUser = async ({ request, response, params }: { request: any, response: any, params: { id: string } }) => { 
  const userID: number = await userService.deleteUser(+params.id);
  response.body = userID;
};

export default {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
};