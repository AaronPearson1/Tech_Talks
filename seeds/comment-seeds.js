const {
  Comment
} = require('../models');

const commentdata = [{
    comment_text: 'cool post bro!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Wow, I this has me wanting to do more researh',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'I really enjoyed your posts!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Nice :)',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Love this',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'I agree!',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Hell Yeah',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Wow. Gread read',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Damn',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Great read!!',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Sounds Awesome',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Amazing',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Cloud Adoption all the way dude!!',
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;