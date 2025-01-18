const mongoose=require('mongoose');
// define the person schema 
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    works:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    
    },
    salary:{
        type:Number,
        required:true
    }
});
const Person=mongoose.model('Person',personSchema);
module.exports=Person;