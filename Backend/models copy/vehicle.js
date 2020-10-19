const express               = require("express"),
      mongoose              = require("mongoose");
      
      
// Model/Schema      
 const vehicleSchema = new mongoose.Schema({
     license_plate: String,
     make: String,
     model: String,
     year_model: String,
     created: {type: Date, default: Date.now}
 });

 
 
 const Vehicle = mongoose.model("Vehicle", vehicleSchema);
 module.exports = Vehicle;