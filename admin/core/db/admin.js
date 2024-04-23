const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

        email: {
            type:String,
        },
        password:{
            type:String
        },
        firstname :{
            type:String
        },
        lastname:{
            type:String
        },
        photo:{
            type:String
        },
        address:{
            type:String
        },
        phone:{
            type:String
        },
        dob:{
            type:String
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const AdminModel = mongoose.model('Admin', Adminschema )
module.exports = {
    AdminModel
}