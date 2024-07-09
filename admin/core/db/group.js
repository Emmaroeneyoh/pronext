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
        editedBy: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Admin' , default :null
        },
    editedAt : {
        type: String,
        default:""
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