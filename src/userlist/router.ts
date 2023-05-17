import { Router } from 'express';

// import {
//   // blockUserById,
//   deleteUserById,
//   getUserById,
//   getUserlist,
//   loginUser,
//   setNewUser,
//   // unblockUserById,
// } from './repository';
// import { AuthUserInterface, UserInterface } from './user';
// const router = Router();

// router.get('/', async (req, res) => {
//   try {
//     const data = await getUserlist();
//     return res.json(data);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const data = await getUserById(Number(req.params.id));
//     if (!data) return res.sendStatus(StatusCodes.NotFound);
//     return res.json(data);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// router.post('/delete', async (req, res) => {
//   const deleteData = req.body as number[];
//   try {
//     await deleteUserById(deleteData);
//     return res.status(StatusCodes.Ok).send('ok');
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// // router.post('/block', async (req, res) => {
// //   console.log(req.body);
// //   const blockData = req.body as number[];
// //   try {
// //     await blockUserById(blockData);
// //     return res.status(StatusCodes.Ok).send('ok');
// //   } catch (e) {
// //     return res.status(StatusCodes.BadRequest).send(e);
// //   }
// // });

// // router.post('/unblock', async (req, res) => {
// //   const blockData = req.body as number[];
// //   try {
// //     await unblockUserById(blockData);
// //     return res.status(StatusCodes.Ok).send('ok');
// //   } catch (e) {
// //     return res.status(StatusCodes.BadRequest).send(e);
// //   }
// // });

// router.post('/newuser', async (req, res) => {
//   try {
//     await setNewUser(req.body as AuthUserInterface);
//     return res.status(StatusCodes.Ok).send('ok');
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const userToLogin: UserInterface = await loginUser(
//       req.body as AuthUserInterface
//     );
//     console.log(userToLogin);
//     return res.json(userToLogin);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

// export default router;
