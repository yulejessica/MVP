var User = require('../models/user.js');
var Post = require('../models/post.js');
const bcrypt = require("bcrypt");

module.exports = {
  //UPDATE
  update: async (req, res) => {
    if(req.body.userId === req.params.id) {
      if(req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
          {
          $set: req.body,
        },
        {new:true});
        res.status(200).json(updatedUser)
      }
       catch (err) {
        console.log('err while update user', err)
      }
    } else {
      res.status(401).json('Can only update your own account!')
    }
  },
  //DELETE
 delete: async (req, res) => {
    if(req.body.userId === req.params.id) {
      try{
        const user = await User.findById(req.params.id);
        try {
          await Post.deleteMany({ username:user.username })
          await User.findByIdAndDelete(req.params.id)
          res.status(200).json("Deleted User Successfully!")
        }
        catch (err) {
          console.log('err while update user', err)
        }
    }
    catch(err) {
      res.status(404).json('No user found!!')
    }
    } else {
      res.status(401).json('Can only delete your own account!')
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const {password, ...others} = user._doc;
      res.status(200).json(others)
    }
    catch(err) {
      console.log('err while get one user information', err)
    }
  }
}