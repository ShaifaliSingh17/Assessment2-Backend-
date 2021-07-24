var express=require('express');
var router=express.Router();
var Person=require('../models/dataSchema');
router.post('/create',(req,res,next)=>{
       var newPerson=new Person({
          name: req.body.name,
          Description:req.body.Description,
          size:req.body.size
       });
       newPerson.save((err,person)=>{
           if(err){
            res.status(500).json({errmsg:err});
           }
          
            res.status(200).json({msg:person});
           

       });
     // res.status(200).json({msg:"post request"});
});
router.get('/read',(req,res,next)=>{
    Person.find({},(err,persons)=>{
        if(err){
            res.status(500).json({errmsg:err});
           }
          
            res.status(200).json({msg:persons});
           
    });
   
});
router.put('/update',(req,res,next)=>{
   Person.findById(req.body._id, (err,person)=>{
    if(err){
        res.status(500).json({errmsg:err});
       }
    person.name=req.body.name;
    person.Description=req.body.Description;
    person.size=req.body.size;
    person.save((err,country)=>{
        if(err)
        res.status(500).json({errmsg:err});

        res.status(200).json({msg:person});
    });

   })
});
router.delete('/delete/:id',(req,res,next)=>{
   Person.findOneAndRemove({_id: req.params.id},(err,person)=>{
    if(err)
        res.status(500).json({errmsg:err});

    res.status(200).json({msg:person});
   });
});
module.exports=router;