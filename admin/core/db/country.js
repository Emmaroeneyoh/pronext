const mongoose = require('mongoose')
const schema = mongoose.Schema

const countryschema = new schema({
 
        name: {
            type:  String
        },
        continent: {
            type:  String
        },
        note: {
            type:  String
        },
        flag: {
            type:  String
        },
        createdBy: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Admin'
        },
        editedBy: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'Admin' , default : null
        },
       
    editedAt : {
        type: String,
        default:''
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const countryModel = mongoose.model('country', countryschema )
module.exports = {
    countryModel
}