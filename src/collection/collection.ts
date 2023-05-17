import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Model } from 'sequelize-typescript';

export interface CollectionCreateInterface {
  userId: number;
  type: string;
  name: string;
  description: string;
  textField1Name?: string;
  textField2Name?: string;
  textField3Name?: string;
  numberField1Name?: string;
  numberField2Name?: string;
  numberField3Name?: string;
}
export interface CollectionInterface {
  userId: number;
  id: number;
  type: string;
  name: string;
  description: string;
  textField1Name?: string;
  textField2Name?: string;
  textField3Name?: string;
  numberField1Name?: string;
  numberField2Name?: string;
  numberField3Name?: string;
}

export interface CollectionModel
  extends Model<
    InferAttributes<CollectionModel>,
    InferCreationAttributes<CollectionModel>
  > {
  userId: number;
  id: CreationOptional<number>;
  type: string;
  name: string;
  description: string;
  textField1Name: CreationOptional<string>;
  textField2Name: CreationOptional<string>;
  textField3Name: CreationOptional<string>;
  numberField1Name: CreationOptional<string>;
  numberField2Name: CreationOptional<string>;
  numberField3Name: CreationOptional<string>;
}
