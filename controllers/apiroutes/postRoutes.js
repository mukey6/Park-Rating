const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Comment, Post, Vote } = require('../../models');
const Authorize = require('../../utils/authorize');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'park_name',
        'park_rate',
        // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
    }).then((postData)=>{
      res.json(postData)
    })
      // .then(dbPostData => {
      //   res.render('homepage', dbPostData[0]);
      // })
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

  //create new post
  router.post('/', Authorize, (req, res) => {
    Post.create({
      park_name: req.body.park_name,
      post_rate: req.body.park_rate,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  //upvote posts
  router.put('/upvote', Authorize, (req, res) => {
    Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, User, Comment })
      .then(updatedVoteData => res.json(updatedVoteData))
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
  
  module.exports = router;
