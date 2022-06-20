var User = require('../models/user.js');
const bcrypt = require("bcrypt");

module.exports = {
  //REGISTER
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
      const user = await newUser.save();
      res.status(200).json('register successfully!');
    } catch (err) {
      console.log('err while register', err)
    }
  },

 login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("No user found!");

      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong password!");

      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      console.log('err while login', err)
    }
  }
}