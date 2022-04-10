const { Post } = require('../models');

const postdata = [
  {
    title: 'The Cloud is Booming Son!!',
    content: 'Are you for On Prem or Cloud Adoption?',
    user_id: 1
  },
  {
    title: 'Social Media. Check out this link on pros v cons!!',
    content: 'https://www.lifespan.org/lifespan-living/social-media-good-bad-and-ugly',
    user_id: 2
  },
  {
    title: 'Great new read on Crypto! Comment and let me know your thoughts!!',
    content: 'https://cryptonews.com/exclusives/how-hedge-nft-collection-with-ethereum-derivatives.htm',
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
