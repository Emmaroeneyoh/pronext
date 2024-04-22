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
       message:{
            type:String
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const contactusModel = mongoose.model('contactus', Adminschema )
module.exports = {
    contactusModel
}