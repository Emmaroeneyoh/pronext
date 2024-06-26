const mongoose = require('mongoose')
const schema = mongoose.Schema

const groupschema = new schema({
 
        name: {
            type:  String
        },
        teamleader: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Admin'
        },
   
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const groupModel = mongoose.model('group', groupschema )
module.exports = {
    groupModel
}