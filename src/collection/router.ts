import { Router } from 'express';
import { StatusCodes } from '../common/status-codes';
import { CollectionCreateInterface, CollectionInterface } from './collection';
import {
  changeCollection,
  createCollection,
  deleteCollection,
  getAllCollections,
} from './repository';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllCollections();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/', async (req, res) => {
  try {
    await createCollection(req.body as CollectionCreateInterface);
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/change', async (req, res) => {
  try {
    await changeCollection(req.body as CollectionInterface);
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await deleteCollection(Number(req.params.id));
    return res.status(StatusCodes.Ok).send('ok');
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

export default router;
