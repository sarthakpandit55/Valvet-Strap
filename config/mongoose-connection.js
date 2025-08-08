const mongoose = require('mongoose');
const config = require('config')

// debuger
const dbgr = require('debug')("development:mongoose");

mongoose.connect(`${config.get("MONGODB_URI")}/ValvetStrap`)
.then(() => {
    dbgr("connected");               //we can also use debuggers
})
.catch((err) => {
    dbgr(err); 
})

module.exports = mongoose.connection;