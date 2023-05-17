import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { Model } from 'sequelize-typescript';

export interface CommentInterface {
  comment: string;
  itemId: number;
  userId: number;
}

export interface CommentModel
  extends Model<
    InferAttributes<CommentModel>,
    InferCreationAttributes<CommentModel>
  > {
  comment: string;
  itemId: number;
  userId: number;
}
