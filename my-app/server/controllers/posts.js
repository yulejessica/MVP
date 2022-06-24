var Post = require('../models/post.js');

module.exports = {
  //get post
  get: async (req, res) => {
    try{
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    }
    catch(err) {
      console.log('err while getting a post', err)
    }
  },
  //get all posts
  getAll: async (req, res) => {
    const username = req.query.user;
    const categoryname = req.query.category;
    try{
      let posts;
      if(username) {
        posts = await Post.find({username: username})
      } else if(categoryname) {
        posts = await Post.find({categories: {
          $in: [categoryname]
        }})
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    }
    catch(err) {
      console.log('err while getting all posts', err)
    }
  },
  //create
  createOne: async (req, res) => {
    const newPost = new Post(req.body);
    try{
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    }catch(err) {
      console.log('error while creating new post', err);
    }
  },
  //update post
  update: async (req, res) => {
    try{
      const post = await Post.findById(req.params.id);
      if(post.username === req.body.username) {
        try{
          const updatedPost = await Post.findByIdAndUpdate(req.params.id,
            {
            $set: req.body
          },
          { new:true });
          res.status(200).json(updatedPost);
        }catch(err) {
          console.log('err while updating post', err);
        }
    } else {
      res.status(401).json('can only update your own post!!');
    }
    }
    catch(err) {
      console.log('err while updating post', err)
    }
  },
  //delete post
  delete: async (req, res) => {
    try{
      const post = await Post.findById(req.params.id);
      if(post.username === req.body.username) {
        try{
          await post.delete();
          res.status(200).json('Successfully deleted post!');
        }catch(err) {
          console.log('err while deleting post', err);
        }
    } else {
      res.status(401).json('can only delete your own post!!');
    }
    }
    catch(err) {
      console.log('err while deleting post', err)
    }
  }

}