const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
  
const anon_ctrl = require('./ctrl/anon_ctrl');

 // database connection
 const dbURI = 'mongodb+srv://orenhaz:943W7rGsQ5UR2ww@cluster0.pomz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

 mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => {
   //console.log(result.connection) ;
   app.listen(port, ()=> {
      console.log(`listen to port ${port} ,click on http://localhost:${port}`);
   } )});
     
   
app.get('/anon/allFlights', anon_ctrl.get_all_flights)
app.get('/anon/flightById', anon_ctrl.get_flights_by_parameters)
app.get('/anon/allAirlines', anon_ctrl.get_all_airlines_join)
app.get('/anon/allCountries', anon_ctrl.get_all_countries)