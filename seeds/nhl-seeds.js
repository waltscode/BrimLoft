const { NhlTeams } = require('../models');

const nhlTeamData = [
    {
        team_name: 'Anaheim Ducks',
        league_id: 1,
    },
    {
        team_name: 'Arizona Coyotes',
        league_id: 1,
    },
    {
        team_name: 'Boston Bruins',
        league_id: 1,
    },
    {
        team_name: 'Buffalo Sabres',
        league_id: 1,
    },
    {
        team_name: 'Calgary Flames',
        league_id: 1,
    },
    {
        team_name: 'Carolina Hurricanes',
        league_id: 1,
    },
    {
        team_name: 'Chicago Blackhawks',
        league_id: 1,
    },
    {
        team_name: 'Colorado Avalanche',
        league_id: 1,
    },
    {
        team_name: 'Columbus Blue Jackets',
        league_id: 1,
    },
    {
        team_name: 'Dallas Stars',
        league_id: 1,
    },
    {
        team_name: 'Detroit Red Wings',
        league_id: 1,
    },
    {
        team_name: 'Edmonton Oilers',
        league_id: 1,
    },
    {
        team_name: 'Florida Panthers',
        league_id: 1,
    },
    {
        team_name: 'Los Angeles Kings',
        league_id: 1,
    },
    {
        team_name: 'Minnesota Wild',
        league_id: 1,
    },
    {
        team_name: 'Montreal Canadiens',
        league_id: 1,
    },
    {
        team_name: 'Nashville Predators',
        league_id: 1,
    },
    {
        team_name: 'New Jersey Devils',
        league_id: 1,
    },
    {
        team_name: 'New York Islanders',
        league_id: 1,
    },
    {
        team_name: 'New York Rangers',
        league_id: 1,
    },
    {
        team_name: 'Ottawa Senators',
        league_id: 1,
    },
    {
        team_name: 'Philadelphia Flyers',
        league_id: 1,
    },
    {
        team_name: 'Pittsburgh Penguins',
        league_id: 1,
    },
    {
        team_name: 'San Jose Sharks',
        league_id: 1,
    },
    {
        team_name: 'St. Louis Blues',
        league_id: 1,
    },
    {
        team_name: 'Tampa Bay Lightning',
        league_id: 1,
    },
    {
        team_name: 'Toronto Maple Leafs',
        league_id: 1,
    },
    {
        team_name: 'Vancouver Canucks',
        league_id: 1,
    },
    {
        team_name: 'Vegas Golden Knights',
        league_id: 1,
    },
    {
        team_name: 'Washington Capitals',
        league_id: 1,
    },
    {
        team_name: 'Winnipeg Jets',
        league_id: 1,
    },
];

const seedNhl = () => NhlTeams.bulkCreate(nhlTeamData);

module.exports = seedNhl;