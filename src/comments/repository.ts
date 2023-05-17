import { Comment } from '../app';
import { CommentInterface } from './comment';

export async function getAllComments() {
  const commentList = await Comment.findAll()
    .then((res) => res)
    .catch((e) => {
      console.log(e);
      throw Error(e);
    });
  return Promise.resolve<CommentInterface[]>(commentList);
}

export async function createComment(comment: CommentInterface) {
  const newComment = await Comment.create({ ...comment })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw Error(e);
    });

  return newComment;
}
