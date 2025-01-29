const express = require("express")
const router = express.Router();
const { Country } = require('../models/country');
const { State } =require('../models/state')
const { City } =require('../models/city')

//save country
router.post('/', async (req, res) => {
  debugger
  try {
      const cnt = new Country(req.body);
      const save = await cnt.save();
      res.status(201).send({
          message: 'Country created successfully',
          Data: save
      });
  } catch (error) {
      res.status(500).send(error);
  }
})
// Get all countries
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json({messege:'country fetched...',recordcount:countries.length,data:countries});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//save state
router.post('/states', async (req, res) => {
  debugger
  try {
      const stt = new State(req.body);
      // const country=await Country.find();
      // const check=country.find((x)=>x.short_name==stt.country_short_name)
      const { short_name } = stt.country_short_name;
      const check= await Country.findOne({ short_name:stt.country_short_name }); 
      if(!check){
        return res.status(404).json({message:"No such country found"})
      }
      const save = await stt.save();
      res.status(201).send({
          message: 'State created successfully',
          Data: save
      });
  } catch (error) {
      res.status(500).send(error);
  }
})
// Get all states for a country
router.get('/states', async (req, res) => {
  debugger
    try {
    const states = await State.find({country_short_name:req.body.country_short_name});
    if(req.body.country_short_name=="" || req.body.country_short_name==undefined){
      res.status(404).json({ message: "please mentioan country short name",key:'country_short_name' });   
      return
    }else if(states[0]==undefined){
      res.status(402).json({ message: "this country_short_name is not exist please check ◾◾",key:'country_short_name' });
      return
    }
    res.status(200).json({messege:'country fetched...',recordcount:states.length,data:states});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//save city
router.post('/states/city', async (req, res) => {
  debugger
  try {
      const city = new City(req.body);
      const save = await city.save();
      res.status(201).send({
          message: 'City created successfully',
          Data: save
      });
  } catch (error) {
      res.status(500).send(error);
  }
})
// Get all districts for a state
router.get('/states/city', async (req, res) => {
  try {
    const city = await City.find({state_name:req.body.state_name});
    if(req.body.state_name=="" || req.body.state_name==undefined){
      res.status(404).json({ message: "please mentioan country short name",key:'state_name' });
      return
    }
    res.status(200).json({messege:'country fetched...',recordcount:city.length,data:city});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/only_indian_states', async (req, res) => {
  debugger
    try {
    const states = await State.find({ country_short_name: 'IN' })
    res.status(200).json({messege:'country fetched...',recordcount:states.length,data:states});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/city_except_india', async (req, res) => {
  debugger
    try {
    const states = await State.find({ country_short_name: 'USA' })
    res.status(200).json({messege:'country fetched...',recordcount:states.length,data:states});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router