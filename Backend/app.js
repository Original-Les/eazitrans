const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/eazitrans?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connection to database successful ...!'))
  .catch(() => console.log('Fail to connect to database ...!'));

app.use(bodyParser.json());
const Driver = require('./models/driver');
// const Owner = require('./models/owner');
// const Passenger = require('./models/passenger');
// const Vehicule = require('./models/vehicule');

const driverRoutes = require('./routes/driver');
app.use('/api/drivers', driverRoutes);


app.use((req, res) => {
   res.json({ message: 'WELCOME TO EAZITRANS!' }); 
});



module.exports = app;