const express               = require("express"),
      mongoose              = require("mongoose");
      
      
// Model/Schema      
 const passengerSchema = new mongoose.Schema({
     username   : String,
     email: String,
     cell: String,
     password: String,
     f_name : String,
     l_name: String,
     created: {type: Date, default: Date.now}
 });

 
 
 const Passenger = mongoose.model("Passenger", passengerSchema);
 module.exports = Passenger;