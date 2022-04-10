const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'techguy1',
    email: 'nwestnedge0@cbc.ca',
    password: 'qwerty12345'
  },
  {
    username: 'gamerman5',
    email: 'rmebes1@sogou.com',
    password: 'qwerty12345'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'qwerty12345'
  },
  {
    username: 'consolethumb',
    email: 'ihellier3@goo.ne.jp',
    password: 'qwerty12345'
  },
  {
    username: 'xboxwarrior',
    email: 'nosony4@weather.com',
    password: 'qwerty12345'
  },
  {
    username: 'dave10',
    email: 'larnout5@imdb.com',
    password: 'qwerty12345'
  },
  {
    username: 'finalfantasy123',
    email: 'hnapleton6@ff.com',
    password: 'qwerty12345'
  },
  {
    username: '2kthedream',
    email: 'nbaballislife@nb.com.',
    password: 'qwerty12345'
  },
  {
    username: 'cryptogirl',
    email: 'financewer@google.ru',
    password: 'qwerty1234545'
  },
  {
    username: 'coder7-python',
    email: 'bsteen9@epa.com',
    password: 'qwerty1234545'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
