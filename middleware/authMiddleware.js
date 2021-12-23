const jwt = require('jsonwebtoken');
const config  = require('../config/default.json');


const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, config.get('privateKey'), (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        //res.redirect('/login'); // in ajax act differently
      } else {
          // we may here- check the user role ...
          const url=req.baseUrl;
          const user= req.cookies.user;
          let flag=false;
          switch (user.rule) {
            case "Customer":
              if(url.indexOf('customers')|| url.indexOf('anonymous'))
                 flag= true;
              break;
            case "Airline":
              if(url.indexOf('airlines')|| url.indexOf('anonymous'))
                 flag= true;
              break;
            case "Admin":
              if(url.indexOf('admin')|| url.indexOf('anonymous'))
                flag= true;
              break;
            case "Anonymous":
              if(url.indexOf('anonymous'))
                  flag= true;
              break;
            default:  
                flag= false;     
          }
        
        if(flag)
           next();
      }
    });
  } else {
   // res.redirect('/signout'); // in ajax act differently
   next();
  }
};

// isLogin
const isLogin = (req, res, next) => {
    const cookies = req.cookies.jwt;
    if (cookies)
     {

       console.log(true);
       res.json(true)
      
    
    } else {
       console.log(false)
      next();
    }
  };

  const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token,config.get('privateKey'), async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.send('bad token');
        } else {
         //res.locals.token= decodedToken;
          console.log(decodedToken);
          next(); 
        }
      });
    } else {
      // Only anonymous rule when no token provide.
      next();
    }
  };

  module.exports = { requireAuth, checkUser, isLogin };