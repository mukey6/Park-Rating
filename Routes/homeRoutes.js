const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        '',
        '',
        '',
        '',
        [sequelize.literal(]
      ],
      include: [
        {
          model: Comment,
          attributes: [],
          include: {
            model: User,
            attributes: []
          }
        },
        {
          model: User,
          attributes: []
        }
      ]
    })
      .then(dbPostData => {
        res.render('homepage', dbPostData[0]);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

router.get('/login', (req, res) =>{
   if (req.session.loggedIn){
    res.redirect('/');
    return;
   }
    res.render('login');
  });
  
  module.exports = router;
  