const mongoose=require('mongoose');
// define the mongodb connection URL
const mongoURL ='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to MongoDb server');
    
})
db.on('error',()=>{
    console.log('error to MongoDb server');
    
})
db.on('disconnected',()=>{
    console.log('disconnected to MongoDb server');
    
})

module.exports=db;