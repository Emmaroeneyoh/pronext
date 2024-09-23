const mongoose = require('mongoose')
const schema = mongoose.Schema

const spaceschema = new schema({
 
        title: {
            type:  String
        },
        general: {
            type:  Boolean
        },
        note: {
            type: String
        },
        adminid: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Admin' , default :null
        },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const spaceModel = mongoose.model('space', spaceschema )
module.exports = {
    spaceModel
}