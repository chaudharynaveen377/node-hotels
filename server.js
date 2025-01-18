const express=require('express');
// const person=require('./models/person');
const app=express();   
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db=require('./db'); 
// const Person = require('./models/person');
app.get('/',function(req ,res){
res.send("welcome to my hotel..How i can help you ?,we have list of menus")
})

// post route to add a person
// app.post('/person',async(req,res)=>{
//   try{ const data=req.body;
//     const newPerson=new person(data);
//     const response =await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   }
//   catch(err){
// console.log(err);
// res.status(500).json({
//     error:'Internal server error'
// })
//   }
// })
// //   get method 
//   app.get('/person',async(req,res)=>{
//     try {
//         const data =await Person.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             error:'Internal server error'
//         })
        
//     }
//   })

// app.get('/person/:workType',async(req,res)=>{
//   try{
//   const workType=req.params.workType;
//   if(workType=='chef' || workType=='manager' || workType=='waiter'){
//       const response=await Person.find({work:workType});
//       console.log("response found");
//       res.status(200).json(response);
      
//   }
//   else{
//     res.status(404).json({error:'invalid work type'})
//   }
// }catch(err){

// }
// })
   
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(3000)