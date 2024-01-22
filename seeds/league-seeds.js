const { League } = require('../models');

const leagueData = [
    {
        league_name: 'NHL',
      },
      {
        league_name: 'NFL',
      },
      {
        league_name: 'MLB',
      },
      {
        league_name: 'NBA',
      },
    ];

const seedLeagues = () => League.bulkCreate(leagueData);

module.exports = seedLeagues;


