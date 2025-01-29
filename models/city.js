const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Country',required:true },
    name: { type: String, required: true,unique:true },
    state_name: { type: String, required:true },
  });
  const City = mongoose.model('City', citySchema);
  
  module.exports = { City };