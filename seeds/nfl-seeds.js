const { NflTeams } = require('../models');

const nflTeamData = [
    {
        team_name: 'Arizona Cardinals',
        league_id: 2,
    },
    {
        team_name: 'Atlanta Falcons',
        league_id: 2,
    },
    {
        team_name: 'Baltimore Ravens',
        league_id: 2,

    },
    {
        team_name: 'Buffalo Bills',
        league_id: 2,

    },
    {
        team_name: 'Carolina Panthers',
        league_id: 2,

    },
    {
        team_name: 'Chicago Bears',
        league_id: 2,

    },
    {
        team_name: 'Cincinnati Bengals',
        league_id: 2,

    },
    {
        team_name: 'Cleveland Browns',
        league_id: 2,

    },
    {
        team_name: 'Dallas Cowboys',
        league_id: 2,

    },
    {
        team_name: 'Denver Broncos',
        league_id: 2,

    },
    {
        team_name: 'Detroit Lions',
        league_id: 2,

    },
    {
        team_name: 'Green Bay Packers',
        league_id: 2,

    },
    {
        team_name: 'Houston Texans',
        league_id: 2,

    },
    {
        team_name: 'Indianapolis Colts',
        league_id: 2,

    },
    {
        team_name: 'Jacksonville Jaguars',
        league_id: 2,

    },
    {
        team_name: 'Kansas City Chiefs',
        league_id: 2,

    },
    {
        team_name: 'Las Vegas Raiders',
        league_id: 2,

    },
    {
        team_name: 'Los Angeles Chargers',
        league_id: 2,

    },
    {
        team_name: 'Los Angeles Rams',
        league_id: 2,

    },
    {
        team_name: 'Miami Dolphins',
        league_id: 2,

    },
    {
        team_name: 'Minnesota Vikings',
        league_id: 2,

    },
    {
        team_name: 'New England Patriots',
        league_id: 2,

    },
    {
        team_name: 'New Orleans Saints',
        league_id: 2,

    },
    {
        team_name: 'New York Giants',
        league_id: 2,

    },
    {
        team_name: 'New York Jets',
        league_id: 2,

    },
    {
        team_name: 'Philadelphia Eagles',
        league_id: 2,

    },
    {
        team_name: 'Pittsburgh Steelers',
        league_id: 2,

    },
    {
        team_name: 'San Francisco 49ers',
        league_id: 2,

    },
    {
        team_name: 'Seattle Seahawks',
        league_id: 2,

    },
    {
        team_name: 'Tampa Bay Buccaneers',
        league_id: 2,

    },
    {
        team_name: 'Tennessee Titans',
        league_id: 2,

    },
    {
        team_name: 'Washington Football Team',
        league_id: 2,

    },
];

const seedNfl = () => NflTeams.bulkCreate(nflTeamData);

module.exports = seedNfl;