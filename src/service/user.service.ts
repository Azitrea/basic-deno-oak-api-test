import { User } from "../models/user.model.ts";
import userDao from '../database/user-dao.service.ts';

/**
 * Return every user in the database {User}
 * @returns Promise<User[]>
 */
const getAllUsers = async (): Promise<User[]> => {
  return userDao.getAllUsers();
};

/**
 * Creates one user and returns the created users ID
 * @param {User} user
 * @returns Promise<number> - userID
 */
const createUser = async (user: User): Promise<number> => {
  return userDao.createUser(user);
};

/**
 * Return one user by userID
 * @param userID number
 * @returns Promise<User>
 */
const getOneUser = async (userID: number): Promise<User> => {
  return userDao.getOneUser(userID);
};

/**
 * Updates one user by userID
 * @param user User
 * @returns Promise<number> - userID
 */
const updateUser = async (user: User): Promise<number> => {
  return userDao.updateUser(user);
};

/**
 * Removes one user from database by userID
 * @param userID number
 * @returns Promise<number> - userID
 */
const deleteUser = async (userID: number): Promise<number> => {
  return userDao.deleteUser(userID);
};

export default {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
};
