const express =require('express');
const router =express.Router();
const Person=require('../models/person');
router.post('/',async(req,res)=>{
    try{ const data=req.body;
      const newPerson=new Person(data);
      const response =await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    }
    catch(err){
  console.log(err);
  res.status(500).json({
      error:'Internal server error'
  })
    }
  })

  router.get('/',async(req,res)=>{
    try {
        const data =await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:'Internal server error'
        })
        
    }
  })

  router.get('/:workType',async(req,res)=>{
    try{
    const workType=req.params.workType;
    if(['chef', 'manager', 'waiter'].includes(workType)){
        const response=await Person.find({works: workType});
        console.log("response found");
        res.status(200).json(response);
        
    }
    else{
      res.status(404).json({error:'invalid work type'})
    }
  }
  catch(err){
    console.log(error);
    res.status(500).json({
        error:'Internal server error'
    })
  }
  })

// comment addede for tresting pupose
  module.exports=router;