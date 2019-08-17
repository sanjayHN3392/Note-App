const mongoose=require('mongoose')

//connect express to mongo via mongoose
//configure the promise library to ES6 promise
mongoose.Promise=global.Promise
//connect to db
const CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/notes-app-feb1"
	mongoose
		
mongoose.connect(CONNECTION_URI,{useCreateIndex:true,useNewUrlParser:true})
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('error connected to db')
})

module.exports= mongoose
