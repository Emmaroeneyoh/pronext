

const mongoose = require('mongoose');
const base = 'mongodb+srv://emmaro:1234@tutorial.klpqo.mongodb.net/pronext?retryWrites=true&w=majority'
const coonectdb = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(base)
.then((result) => console.log('base connetced'))
.catch((err) => console.log(err))
}

module.exports = {
    coonectdb 
}