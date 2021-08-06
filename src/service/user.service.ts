import { User } from "../models/user.model.ts";
import userDao from '../database/user-dao.service.ts';

const getAllUsers = async (): Promise<User[]> => {
  return userDao.getAllUsers();
};

const createUser = (user: User) => {
  // create user
  // return userID
  return 1;
};

const getOneUser = (userID: number) => {
  // find user
  const user: User = {
    id: 1,
    name: "User1",
    birthDate: new Date(),
    address: "",
  };

  return user;
};

const updateUser = (user: User) => {
  // return userID
  return 1;
};

const deleteUser = (userID: number) => {
  // return userID
  return 1
};

export default {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
};
