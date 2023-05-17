/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import mysql from 'mysql2';
import { DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { UserModel } from './userlist/user';
import TelegramBot from 'node-telegram-bot-api';

// import userlist from './userlist/router';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const indexPath = path.join(__dirname, '../reactApp/app/');
const PORT = process.env.PORT || 4050;

// app.use('/', express.static(indexPath));

// app.use('/api/userlist', userlist);

const sequelize = new Sequelize(
  'heroku_855d0c53892bb33',
  'b60ae478d40aa5',
  '67db2319',
  {
    dialect: 'mysql',
    host: 'eu-cdbr-west-03.cleardb.net',
  }
);

const queryInterface = sequelize.getQueryInterface();

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server started on localhost');
    });
  })
  .catch((err) => console.log(err));

export const User = sequelize.define<UserModel>(
  'user',
  {
    chatId: {
      type: DataTypes.DOUBLE,
      autoIncrement: true,
      primaryKey: true,
    },
    // login: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // role: {
    //   type: DataTypes.STRING,
    //   defaultValue: 'user',
    // },
  },
  {
    hooks: {
      // beforeCreate: async (user) => {
      //   if (user.password) {
      //     const salt = await bcrypt.genSaltSync(10, 'a');
      //     user.password = bcrypt.hashSync(user.password, salt);
      //   }
      // },
    },
  }
);

// export const Collection = sequelize.define<CollectionModel>('collection', {
//   userId: {
//     type: DataTypes.INTEGER,
//   },
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   type: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: { type: DataTypes.TEXT },
//   textField1Name: { type: DataTypes.STRING, defaultValue: '' },
//   textField2Name: { type: DataTypes.STRING, defaultValue: '' },
//   textField3Name: { type: DataTypes.STRING, defaultValue: '' },
//   numberField1Name: { type: DataTypes.STRING, defaultValue: '' },
//   numberField2Name: { type: DataTypes.STRING, defaultValue: '' },
//   numberField3Name: { type: DataTypes.STRING, defaultValue: '' },
// });

// export const Item = sequelize.define<ItemModel>('item', {
//   userId: {
//     type: DataTypes.INTEGER,
//   },
//   collectionId: {
//     type: DataTypes.INTEGER,
//   },
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   tags: {
//     type: DataTypes.STRING,
//   },
//   likes: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//     allowNull: false,
//   },
//   textField1Value: { type: DataTypes.STRING },
//   textField2Value: { type: DataTypes.STRING },
//   textField3Value: { type: DataTypes.STRING },
//   numberField1Value: { type: DataTypes.REAL },
//   numberField2Value: { type: DataTypes.REAL },
//   numberField3Value: { type: DataTypes.REAL },
// });

// export const Tag = sequelize.define<TagModel>('tags', {
//   tag: {
//     type: DataTypes.STRING,
//   },
// });

// export const Comment = sequelize.define<CommentModel>('comments', {
//   comment: {
//     type: DataTypes.STRING,
//   },
//   itemId: {
//     type: DataTypes.INTEGER,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//   },
// });

User.findAll({
  attributes: ['chatId'],
}).then((res) => console.log('users', res));

const token = '6108338639:AAFxYUnEnUg7YPuTqOzjISkWT0hYHPzhZNA';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});
