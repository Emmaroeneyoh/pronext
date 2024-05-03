const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

       
        name: {
            type:String,
        },
        email:{
            type:String
        },
        phone :{
            type:String
        },
        enquiry :{
            type:String , default :""
        },
       status :{
            type:String , default :""
        },
       message:{
            type:String
        },
       
    createdAt : {
        type:String
    }
})
const contactusModel = mongoose.model('contactus', Adminschema )
module.exports = {
    contactusModel
}