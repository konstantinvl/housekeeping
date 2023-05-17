import { Router } from 'express';
import { StatusCodes } from '../common';
import { CommentInterface } from './comment';
import { createComment, getAllComments } from './repository';

const router = Router();

router.get('/', async (req, res) => {
  console.log('get');
  try {
    const data = await getAllComments();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/', async (req, res) => {
  try {
    await createComment(req.body as CommentInterface);
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

export default router;
