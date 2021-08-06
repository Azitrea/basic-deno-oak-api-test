import client from './init-database.service.ts';
import { TABLE } from '../models/database.model.ts';
import { User } from '../models/user.model.ts';

const getAllUsers = async (): Promise<User[]> => {
  return client.query(`SELECT * FROM ${TABLE.USER}`);;
}

const getOneUser = (): User => {
  return {};
}

const createUser = (userData: User): number => {
  return 0;
}

const updateUser = (userData: User): number => {
  return 0;
}

const deleteUser = (id: number): number => {
  return 0;
}


export default {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}