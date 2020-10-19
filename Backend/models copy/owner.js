const express               = require("express"),
      mongoose              = require("mongoose");
      
      
// Model/Schema      
 const ownerSchema = new mongoose.Schema({
     username   : String,
     email: Array,
     cell: String,
     password: String,
     f_name : String,
     l_name: String,
     created: {type: Date, default: Date.now},
     vehicles: [
         {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Vehicle"
         }
     ],
     drivers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver"
        }
    ]
 });

 
 
 const Owner = mongoose.model("Owner", ownerSchema);
 module.exports = Owner;