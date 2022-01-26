const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'muktar',
    email: 'muktar@email.com',
    password: 'password123'
  },
  {
    username: 'evan',
    email: 'evan@email.com',
    password: 'password123'
  },
  {
    username: 'tavian',
    email: 'tavian@email.com',
    password: 'password123'
  },
  {
    username: 'daniel',
    email: 'daniel@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
