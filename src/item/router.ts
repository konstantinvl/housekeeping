import { Router } from 'express';
import { StatusCodes } from '../common/status-codes';
import { ItemCreateInterface, ItemInterface } from './item';
import {
  changeItem,
  createItem,
  deleteItem,
  getAllItems,
  likeItem,
} from './repository';

const router = Router();

router.get('/', async (req, res) => {
  console.log('get');
  try {
    const data = await getAllItems();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/', async (req, res) => {
  try {
    await createItem(req.body as ItemCreateInterface);
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/change', async (req, res) => {
  try {
    await changeItem(req.body as ItemInterface);
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await deleteItem(Number(req.params.id));
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/like', async (req, res) => {
  try {
    await likeItem(req.body as { itemId: number; userId: number });
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

export default router;
