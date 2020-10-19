const express               = require("express"),
      mongoose              = require("mongoose");
      
      
// Model/Schema      
 const driverSchema = new mongoose.Schema({
     username: String,
     email: Array,
     cell: String,
     password: String,
     f_name: String,
     l_name: String,
     license_num: String,
     created: {type: Date, default: Date.now},
     vehicles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
        }
    ],
 });

 
 
 const Driver = mongoose.model("Driver", driverSchema);
 module.exports = Driver;