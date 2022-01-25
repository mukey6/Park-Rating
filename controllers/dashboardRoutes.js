const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');
const Authorize = require('../../utils/authorize');

router.get('/', Authorize, (req, res) => {
    console.log(req.session);
    Post.findAll({
    where: {
        user_id: req.session.user_id
        },
        attributes: [
          'id',
          'park_name',
          'park_rate',
          'user_id',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'user_id','post_id'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
router.get('/edit/:id', Authorize, (req, res) => {
    Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'park_name',
        'park_rate',
        'user_id',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id','post_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('edit', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;