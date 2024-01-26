const { League } = require('../models');

const leagueData = [
      {
        league_name: 'NHL',
        league_logo_url: 'https://1000logos.net/wp-content/uploads/2017/05/NHL-Logo.png',
      },
      {
        league_name: 'NFL',
        league_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png',
      },
      {
        league_name: 'MLB',
        league_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png'
      },
      {
        league_name: 'NBA',
        league_logo_url: 'https://images.ctfassets.net/h8q6lxmb5akt/5qXnOINbPrHKXWa42m6NOa/421ab176b501f5bdae71290a8002545c/nba-logo_2x.png',
      },
    ];

const seedLeagues = () => League.bulkCreate(leagueData);

module.exports = seedLeagues;


