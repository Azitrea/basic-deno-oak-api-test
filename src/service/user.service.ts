import { User } from "../models/user.model.ts";

const getAllUsers = () => {
  const users: User[] = [];
  return users;
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
