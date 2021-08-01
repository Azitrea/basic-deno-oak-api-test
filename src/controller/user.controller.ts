import { User } from "../models/user.model.ts";
import userService from '../service/user.service.ts';

const getAllUsers = ({ request, response }: { request: any, response: any }) => { 
  const users: User[] = userService.getAllUsers();
  response.body = users;
};

const createUser = ({ request, response }: { request: any, response: any }) => { 
  const userID: number = userService.createUser(request.body);
  response.body = userID;
};

const getOneUser = ({ request, response, params }: { request: any, response: any, params: { id: string } }) => {
  // Check for valid id
  const user: User = userService.getOneUser(+params.id);
  response.body = user;
};

const updateUser = ({ request, response, params }: { request: any, response: any, params: { id: string } }) => {
  // Check for valid id
  const userID: number = userService.updateUser(request.body);
  response.body = userID;
};

const deleteUser = ({ request, response, params }: { request: any, response: any, params: { id: string } }) => { 
  // Check for valid id
  const userID: number = userService.deleteUser(+params.id);
  response.body = userID;
};

export default {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
};