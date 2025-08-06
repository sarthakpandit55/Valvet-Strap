const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name : {
        type : String,
        minlength : 3,
        trim : true
    },
    email : String,
    password : String,
    product : {
        type : Array,
        default : []
    },
    picture : String,
    gstin : String
});


module.exports = mongoose.model("owner", ownerSchema);