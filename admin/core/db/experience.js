const mongoose = require('mongoose')
const schema = mongoose.Schema

const experienceschema = new schema({
 
        value: {
            type:  String
        },
        name: {
            type: String
        },
        createdBy: {
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
const experienceModel = mongoose.model('experience', experienceschema )
module.exports = {
    experienceModel
}