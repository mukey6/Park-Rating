const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'park_name',
        'park_rate',
        'user_id',
        ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_input', 'user_id','title'],
          include: {
            model: User,
            attributes: ['userID']
          }
        },
        {
          model: User,
          attributes: ['userID']
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
  