const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

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
  
  
router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
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
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        const post = dbPostData.get({ plain: true });
  
        res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;