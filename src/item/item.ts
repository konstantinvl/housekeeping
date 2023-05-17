import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Model } from 'sequelize-typescript';

export interface ItemCreateInterface {
  userId: number;
  collectionId: number;
  name: string;
  textField1Value?: string;
  textField2Value?: string;
  textField3Value?: string;
  numberField1Value?: number;
  numberField2Value?: number;
  numberField3Value?: number;
  tags: string;
  likes: string;
}
export interface ItemInterface {
  userId: number;
  collectionId: number;
  id: number;
  name: string;
  textField1Value: string;
  textField2Value: string;
  textField3Value: string;
  numberField1Value: number;
  numberField2Value: number;
  numberField3Value: number;
  tags: string;
  likes: string;
}

export interface ItemModel
  extends Model<
    InferAttributes<ItemModel>,
    InferCreationAttributes<ItemModel>
  > {
  userId: number;
  collectionId: number;
  id: CreationOptional<number>;
  name: string;
  textField1Value: CreationOptional<string>;
  textField2Value: CreationOptional<string>;
  textField3Value: CreationOptional<string>;
  numberField1Value: CreationOptional<number>;
  numberField2Value: CreationOptional<number>;
  numberField3Value: CreationOptional<number>;
  tags: CreationOptional<string>;
  likes: CreationOptional<string>;
}
