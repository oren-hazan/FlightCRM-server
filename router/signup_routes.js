const { Router } = require('express');
const signUpController = require('../ctrl/signup_ctrl');

const router = Router();

router.post('/signup',signUpController.signup_post);
  
  module.exports=router;
    