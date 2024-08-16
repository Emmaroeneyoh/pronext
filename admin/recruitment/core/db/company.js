const mongoose = require('mongoose')
const schema = mongoose.Schema

const countryschema = new schema({
 
        name: {
            type:  String
        },
        phone: {
            type:  String
        },
        note: { 
            type:  String
        },
        logo: {
            type:  String
        },
        document: {
            type:  String
        },
        country: {
            type:  mongoose.Schema.Types.ObjectId,
            ref:'country'
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
const companyModel = mongoose.model('company', countryschema )
module.exports = {
    companyModel
}