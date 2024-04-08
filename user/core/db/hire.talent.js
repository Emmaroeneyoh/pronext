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
       scheduledate:{
            type:String
        },
        proposaltype:{
            type:String
        },
       additionalmessage:{
            type:String
        },
        status :{
            type:String , default :""
        },
       
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const hiretalentModel = mongoose.model('hiretalent', Adminschema )
module.exports = {
    hiretalentModel
}