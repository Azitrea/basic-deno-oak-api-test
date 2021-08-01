import { User } from "../models/user.model.ts";

const getAllUsers = ({ request, response }: { request: any, response: any }) => { 
  const users: User[] = [];
  response.body = users;
};

const createUser = () => {};
const getOneUser = () => {};
const updateUser = () => {};
const deleteUser = () => {};

export default {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
};