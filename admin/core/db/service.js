const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

        title: {
            type:String,
        },
        category:{
            type:String
        },
        city :{
            type:String
        },
       tag:{
            type:String
        },
        photo:{
            type:String
        },
        description:{
            type:String
        },
        
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const serviceModel = mongoose.model('service', Adminschema )
module.exports = {
    serviceModel
}