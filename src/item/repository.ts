import { Item } from '../app';
import { setTags } from '../tags/repository';
import { ItemCreateInterface, ItemInterface } from './item';

export async function getAllItems() {
  const itemList = await Item.findAll()
    .then((res) => res)
    .catch((e) => {
      console.log(e);
      throw Error(e);
    });
  return Promise.resolve<ItemInterface[]>(itemList);
}

export async function createItem(item: ItemCreateInterface) {
  const newItem = await Item.create({ ...item })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw Error(e);
    });
  await setTags(newItem.tags);

  return newItem;
}

export async function changeItem(item: ItemInterface) {
  setTags(item.tags);
  await Item.update({ ...item }, { where: { id: item.id } })
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });

  return Promise.resolve();
}

export async function deleteItem(id: number) {
  await Item.destroy({ where: { id: id } });
  return Promise.resolve();
}

export async function likeItem(like: { itemId: number; userId: number }) {
  const { itemId, userId } = like;
  const item = await Item.findByPk(itemId)
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  if (item) {
    const splitedLikes = item.likes.split(',');
    if (!item.likes) {
      await Item.update(
        { ...item, likes: item.likes + userId },
        { where: { id: itemId } }
      )
        .then((res) => res)
        .catch((e) => {
          throw Error(e);
        });
    } else if (!splitedLikes.includes(userId.toString())) {
      splitedLikes.push(userId.toString());
      await Item.update(
        { ...item, likes: splitedLikes.join(',') },
        { where: { id: itemId } }
      )
        .then((res) => res)
        .catch((e) => {
          throw Error(e);
        });
    } else {
      await Item.update(
        {
          ...item,
          likes: splitedLikes
            .filter((id) => id !== userId.toString())
            .join(','),
        },
        { where: { id: itemId } }
      )
        .then((res) => res)
        .catch((e) => {
          throw Error(e);
        });
    }
  }
  return Promise.resolve();
}
