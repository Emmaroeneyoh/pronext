const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

        lastname: {
            type:String,
        },
        firstname: {
            type:String,
        },
        dob: {
            type:String,
        },
        gender: {
            type:String,
        },
        email:{
            type:String
        },
        phone :{
            type:String
        },
        status :{
            type:String , default :"NewForm"
        },
       educationalaccount:{
            type:String
        },
       educationalqualification:{
            type:String
        },
        bpoexperience:{
            type:String
        },
       location:{
            type:String
        },
       site:{
            type:String
        },
       scheduledate:{
            type:String
        },
       fileupload:{
        file:{
            type:String
        },
        type:{
            type:String
        },
        },
        
       
    createdAt : {
        type:String
    }
})
const findjobModel = mongoose.model('findjob', Adminschema )
module.exports = {
    findjobModel
}