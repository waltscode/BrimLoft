const { NbaTeams } = require('../models');

const nbaTeamData = [
    {
        team_name: 'Atlanta Hawks',
        league_id: 4,
    },
    {
        team_name: 'Boston Celtics',
        league_id: 4,
    },
    {
        team_name: 'Brooklyn Nets',
        league_id: 4,
    },
    {
        team_name: 'Charlotte Hornets',
        league_id: 4,
    },
    {
        team_name: 'Chicago Bulls',
        league_id: 4,
    },
    {
        team_name: 'Cleveland Cavaliers',
        league_id: 4,
    },
    {
        team_name: 'Dallas Mavericks',
        league_id: 4,
    },
    {
        team_name: 'Denver Nuggets',
        league_id: 4,
    },
    {
        team_name: 'Detroit Pistons',
        league_id: 4,
    },
    {
        team_name: 'Golden State Warriors',
        league_id: 4,
    },
    {
        team_name: 'Houston Rockets',
        league_id: 4,
    },
    {
        team_name: 'Indiana Pacers',
        league_id: 4,
    },
    {
        team_name: 'Los Angeles Clippers',
        league_id: 4,
    },
    {
        team_name: 'Los Angeles Lakers',
        league_id: 4,
    },
    {
        team_name: 'Memphis Grizzlies',
        league_id: 4,
    },
    {
        team_name: 'Miami Heat',
        league_id: 4,
    },
    {
        team_name: 'Milwaukee Bucks',
        league_id: 4,
    },
    {
        team_name: 'Minnesota Timberwolves',
        league_id: 4,
    },
    {
        team_name: 'New Orleans Pelicans',
        league_id: 4,
    },
    {
        team_name: 'New York Knicks',
        league_id: 4,
    },
    {
        team_name: 'Oklahoma City Thunder',
        league_id: 4,
    },
    {
        team_name: 'Orlando Magic',
        league_id: 4,
    },
    {
        team_name: 'Philadelphia 76ers',
        league_id: 4,
    },
    {
        team_name: 'Phoenix Suns',
        league_id: 4,
    },
    {
        team_name: 'Portland Trail Blazers',
        league_id: 4,
    },
    {
        team_name: 'Sacramento Kings',
        league_id: 4,
    },
    {
        team_name: 'San Antonio Spurs',
        league_id: 4,
    },
    {
        team_name: 'Toronto Raptors',
        league_id: 4,
    },
    {
        team_name: 'Utah Jazz',
        league_id: 4,
    },
    {
        team_name: 'Washington Wizards',
        league_id: 4,
    },
    ];

    const seedNba = () => NbaTeams.bulkCreate(nbaTeamData);

    module.exports = seedNba;