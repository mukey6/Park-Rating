const { Post } = require('../models');

const postdata = [
  {
    park_name: 'Lake Tonka',
    park_rate: 3,
    user_id: 1
  },
  {
    park_name: 'Lake Michigan',
    park_rate: 1,
    user_id: 2
  },
{
  park_name: 'River Park',
  park_rate: 2,
  user_id: 3
},
{
    park_name: 'Ocean Park',
    park_rate: 4,
    user_id: 4
  }
]
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
