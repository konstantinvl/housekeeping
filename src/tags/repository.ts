import { Tag } from '../app';
import { TagInterface, TagModel } from './tags';

async function findTag(tag: string): Promise<false | TagModel> {
  return Tag.findOne({ where: { tag: tag } })
    .then((tag) => {
      if (!tag) return false;
      return tag;
    })
    .catch(() => {
      return false;
    });
}

export async function getAllTags() {
  const tagList = await Tag.findAll()
    .then((res) => res)
    .catch((e) => {
      throw Error(e);
    });
  console.log(tagList);
  return Promise.resolve<TagInterface[]>(tagList);
}

export async function setTags(tags: string) {
  console.log(tags);
  tags.split('#').forEach(async (tag) => {
    const ttt = await findTag(tag.toLowerCase());
    console.log(ttt);
    if (!ttt) {
      const newTag = Tag.create({
        tag: tag.toLowerCase(),
      }).then((res) => res);
      console.log(newTag);
      return Promise.resolve<TagInterface>({
        ...newTag,
      });
    }
  });
}
