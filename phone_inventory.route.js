const express = require('express');
const router = express.Router();
const Phone = require('../Models/phone_inventory.model');

router.post('/', async (req, res, next)=>{
  try{
    const phone = new Phone(req.body,{__v:0});
    const result = await phone.save();
    res.send(result);
  } catch(error){
    res.send(error.message);
  }
});

router.get('/', async (req, res, next)=>{
  try{
    const result = await Phone.find({}, {__v:0});
    res.send(result);
  } catch(error){
    res.send(error.message);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
      const result = await Phone.findById(id, {__v:0});
      res.send(result);
  } catch (error) {
      res.send(error.message);
      
  }
});

router.patch('/:id', async (req, res, next)=>{
  try{
    const id = req.params.id;
    const updates = req.body;
    const result = await Phone.findByIdAndUpdate(id, updates, {__v:0});
    res.send(result);
  } catch(error){
    res.send(error.message);
  }
});

router.delete('/:id', async (req, res, next)=>{
  const id = req.params.id;
  try { 
    const result = await Phone.findByIdAndDelete(id, {__v:0});
    res.send(result);
} catch (error) {
    res.send(error.message);
    
}
});

module.exports = router;