const mongoose = require('mongoose');

//create connection
mongoose.connect('mongodb://localhost/blog',
  { useNewUrlParser: true }, { useUnifiedTopology: true } )
  .then(() => {
    console.log('database connected sucessfully!');
  }).catch(() => {
    mongoose.set('useCreateIndex', true);
  });