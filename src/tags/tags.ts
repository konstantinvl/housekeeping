import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Model } from 'sequelize-typescript';

export interface TagInterface {
  tag: string;
}

export interface TagModel
  extends Model<InferAttributes<TagModel>, InferCreationAttributes<TagModel>> {
  tag: string;
}
