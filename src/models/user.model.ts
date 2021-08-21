import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

export interface Values {
  [key: string]: number | string | boolean | Date | null | undefined;
}

export interface User extends Values {
  id: number;
  email: string;
  name: string;
  address: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class UserDao extends Model {
  static table = 'user';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    email: {
      type: DataTypes.STRING,
      length: 256,
      unique: true,
    },

    name: {
      type: DataTypes.STRING,
      length: 256,
    },

    address: {
      type: DataTypes.STRING,
      length: 256,
      allowNull: true
    },

    birthDate: {
      type: DataTypes.DATE,
    },

  }
}
