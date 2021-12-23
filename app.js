const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { checkUser } = require('./middleware/authMiddleware')

login_routes = require('./router/login_routes')
signup_routes = require('./router/signup_routes')
anon_router = require('./router/anon_routes')
airline_router = require('./router/airline_routes')
admin_router = require('./router/admin_routes')
customer_router = require('./router/customer_routes')

//jwt 
app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({extended:true}));

  
  app.use(cors({
    origin:'http://localhost:4200',
    credentials: true,
    withCredentials :true
  }))

 // database connection
 const dbURI = 'mongodb+srv://orenhaz:943W7rGsQ5UR2ww@cluster0.pomz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

 mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => {
   //console.log(result.connection) ;
   app.listen(port, ()=> {
      console.log(`listen to port ${port} ,click on http://localhost:${port}`);
   } )});

  // routing
   app.use('/anon', anon_router);
   app.use('/airline', airline_router); 
   app.use('/admin', admin_router);
   app.use('/customer', customer_router);
   app.get('*', checkUser);
   app.use('/', login_routes);
   app.use('/', signup_routes);
   
