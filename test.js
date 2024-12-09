const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

    administrative: {
        role:{
            type:String
        },
        status:{
            type:String
        },
       
       
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