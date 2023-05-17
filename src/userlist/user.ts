import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Model } from 'sequelize-typescript';

export interface AuthUserInterface {
  login: string;
  password: string;
  role?: string;
}
export interface UserInterface {
  chatId: number;
  // login: string;
  // role: string;
}

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  chatId: CreationOptional<number>;
  // login: string;
  // password: string;
  // role: CreationOptional<string>;
}
