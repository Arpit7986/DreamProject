const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const facebookSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    }
});

facebookSchema.plugin(passportLocalMongoose);

const Facebook= mongoose.model('Facebook', facebookSchema);

module.exports=Facebook