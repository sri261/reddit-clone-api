import { Post } from "../models/postsModel";

module.exports.getPosts = async (request: any, response: any) => {
  try {
    const posts = await Post.query();
    response.send(posts);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
};

module.exports.createPost = async (request: any, response: any) => {
  try {
    const post = await Post.query().insert({
      post: request.body.post,
      creatorId: request.body.creatorId,
      subredditId: request.body.subredditId,
    });
    response.send(post);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
};
