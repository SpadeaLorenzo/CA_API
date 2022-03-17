const mongoose = require("mongoose");

const subcribersSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subscribedToChannel:{
        type: String,
        required: true
    },
    subscribeDate:{
        type: String,
        required: true,
        default : Date.now
    }

})

module.exports  = mongoose.model('Subscriber' , subcribersSchema)