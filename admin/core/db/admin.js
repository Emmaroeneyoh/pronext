const mongoose = require('mongoose')
const schema = mongoose.Schema

const Adminschema = new schema({

    basic_info: {
        email: {
            type:String,
        },
        password:{
            type:String
        },
        firstname :{
            type:String
        },
        middlename :{
            type:String
        },
        lastname:{
            type:String
        },
        photo:{
            type:String
        },
        phone:{
            type:String
        },
        dob:{
            type:String
        },
        gender:{
            type:String
        },
      } , 
    address_details: {
        address:{
            type:String
        },
      
       
        city:{
            type:String
        },
       
        state:{
            type:String
        },
       
       nationality:{
            type:String
        },
      }  , 
       
    administrative: {
        role:{
            type:String
        },
        status:{
            type:String
        },
       
       
    },
    recruiter: {
        recruiter_active:{
            type:String , default : ''
        },
        teamleader :{
            type:  String,  default : ''
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