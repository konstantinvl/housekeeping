/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import cors from 'cors';

import userlist from './userlist/router';
import collections from './collection/router';
import items from './item/router';
import tags from './tags/router';
import comments from './comments/router';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const indexPath = path.join(__dirname, '../reactApp/app/');
const PORT = process.env.PORT || 4050;

// app.use('/', express.static(indexPath));

app.use('/api/userlist', userlist);

app.use('/api/collections', collections);

app.use('/api/items', items);

app.use('/api/tags', tags);

app.use('/api/comments', comments);
