const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Valvet Strap')
.then(() => {
    console.log("connected");               //we can also use debuggers
})
.catch((err) => {
    console.log(err); 
})

module.exports = mongoose.connection;