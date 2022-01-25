const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Post, Vote } = require('../../models');
const Authorize = require('../../utils/authorize');

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

  router.get('/:id', (req, res) => {
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
          res.status(404).json({ message: 'No such post exists' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //delete existing post
  router.delete('/:id', Authorize, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No such post exists' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //update existing post
  router.put('/:id', Authorize, (req, res) => {
    Post.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No such post exists' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
