const { MlbTeams } = require('../models');

const mlbTeamData = [
    {
        team_name: 'Arizona Diamondbacks',
        league_id: 3,
    },
    {
        team_name: 'Atlanta Braves',
        league_id: 3,
    },
    {
        team_name: 'Baltimore Orioles',
        league_id: 3,
    },
    {
        team_name: 'Boston Red Sox',
        league_id: 3,
    },
    {
        team_name: 'Chicago White Sox',
        league_id: 3,
    },
    {
        team_name: 'Chicago Cubs',
        league_id: 3,
    },
    {
        team_name: 'Cincinnati Reds',
        league_id: 3,
    },
    {
        team_name: 'Cleveland Guardians',
        league_id: 3,
    },
    {
        team_name: 'Colorado Rockies',
        league_id: 3,
    },
    {
        team_name: 'Detroit Tigers',
        league_id: 3,
    },
    {
        team_name: 'Houston Astros',
        league_id: 3,
    },
    {
        team_name: 'Kansas City Royals',
        league_id: 3,
    },
    {
        team_name: 'Los Angeles Angels',
        league_id: 3,
    },
    {
        team_name: 'Los Angeles Dodgers',
        league_id: 3,
    },
    {
        team_name: 'Miami Marlins',
        league_id: 3,
    },
    {
        team_name: 'Milwaukee Brewers',
        league_id: 3,
    },
    {
        team_name: 'Minnesota Twins',
        league_id: 3,
    },
    {
        team_name: 'New York Yankees',
        league_id: 3,
    },
    {
        team_name: 'New York Mets',
        league_id: 3,
    },
    {
        team_name: 'Oakland Athletics',
        league_id: 3,
    },
    {
        team_name: 'Philadelphia Phillies',
        league_id: 3,
    },
    {
        team_name: 'Pittsburgh Pirates',
        league_id: 3,
    },
    {
        team_name: 'San Diego Padres',
        league_id: 3,
    },
    {
        team_name: 'San Francisco Giants',
        league_id: 3,
    },
    {
        team_name: 'Seattle Mariners',
        league_id: 3,
    },
    {
        team_name: 'St. Louis Cardinals',
        league_id: 3,
    },
    {
        team_name: 'Tampa Bay Rays',
        league_id: 3,
    },
    {
        team_name: 'Texas Rangers',
        league_id: 3,
    },
    {
        team_name: 'Toronto Blue Jays',
        league_id: 3,
    },
    {
        team_name: 'Washington Nationals',
        league_id: 3,
    },
];

const seedMlb = () => MlbTeams.bulkCreate(mlbTeamData);

module.exports = seedMlb;