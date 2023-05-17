import { Collection } from '../app';
import {
  CollectionCreateInterface,
  CollectionInterface,
  CollectionModel,
} from './collection';

export async function getAllCollections() {
  console.log('collectionList');
  const collectionList = await Collection.findAll()
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  return Promise.resolve<CollectionInterface[]>(collectionList);
}

export async function createCollection(collection: CollectionCreateInterface) {
  const newCollection = await Collection.create({ ...collection })
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  return newCollection;
}

export async function changeCollection(collection: CollectionInterface) {
  await Collection.update({ ...collection }, { where: { id: collection.id } });
  return Promise.resolve();
}

export async function deleteCollection(id: number) {
  {
    await Collection.destroy({ where: { id: id } });
    return Promise.resolve();
  }
}

// export async function setNewUser(user: AuthUserInterface) {
//     const { login, password, role } = user;
//     const isUser = await findUserbyLogin(login);
//     if (isUser)
//       return Promise.reject(
//         new Error(`User with login ${login} already exists.`)
//       );
//     const newUser = await User.create({
//       login,
//       password,
//       role: role ? role : 'user',
//     }).then((res) => res);
//     return Promise.resolve<UserInterface>({
//       ...newUser,
//     });
//   }
