const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'test comments',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Greatest of all time',
    user_id: 1,
    post_id: 1
  }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
