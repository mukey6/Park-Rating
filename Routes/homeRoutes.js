const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage');
  });
  
  module.exports = router;
  

router.get('/login', (req, res) =>{
   if (req.session.loggedIn){
    res.redirect('/');
    return;
   }
    res.render('login');
  });
  
  module.exports = router;
  