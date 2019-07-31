const mongoose=require('mongoose')

//connect express to mongo via mongoose
//configure the promise library to ES6 promise
mongoose.Promise=global.Promise
//connect to db

mongoose.connect('mongodb://localhost:27017/notes-app-feb1',{useNewUrlParser:true})
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('error connected to db')
})

module.exports= mongoose
