import { Model } from "https://deno.land/x/denodb@v1.0.38/mod.ts";
import { User, UserDao } from "../models/user.model.ts";

const getAllUsers = async (): Promise<User[]> => {
  const userDao: Array<UserDao> = await UserDao.select().all();
  const user = userDao.map(u => {
    return {
      id: Number(u.id) as number,
      email: u.email as string,
      name: u.name as string,
      address: u.address as string,
      birthDate: u.birthDate as Date,
      createdAt: u.createdAt as Date,
      updatedAt: u.updatedAt as Date,
    }
  });

  return (user as User[]);
};

const getOneUser = async (userID: number): Promise<User> => {
  const u: Model | Model[] = await UserDao.where('id', userID).get() as Model[];
  
  if (u.length === 0) {
    throw new Error('User not found');
  }

  return {
    id: Number(u[0].id),
    email: u[0].email as string,
    name: u[0].name as string,
    address: u[0].address as string,
    birthDate: u[0].birthDate as Date,
    createdAt: u[0].createdAt as Date,
    updatedAt: u[0].updatedAt as Date,
  }
};

const createUser = async (userData: User): Promise<number> => {
  const user = await UserDao.create({
    email: userData.email,
    name: userData.name,
    birth_date: userData.birthDate,
    address: userData.address,
  });

  return user?.lastInsertId as number;
};

const updateUser = async (userData: User): Promise<number> => {
  const user: Model | Model[] = await UserDao.where('id', userData.id).get() as Model[];
  if (user.length === 0) {
    throw new Error('User not found');
  }

  await UserDao.where('id', userData.id).update({
    email: userData.email,
    name: userData.name,
    birth_date: userData.birthDate,
    address: userData.address,
  });

  return userData.id;
};

const deleteUser = async (id: number): Promise<number> => {
  const user: Model | Model[] = await UserDao.where('id', id).get() as Model[];
  if (user.length === 0) {
    throw new Error('User not found');
  }

  await UserDao.where('id', id).delete();
  return id;
};

export default {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
