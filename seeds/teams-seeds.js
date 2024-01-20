const { Teams } = require('../models');

const teamData = [
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

const seedTeams = () => Teams.bulkCreate(teamData);

module.exports = seedTeams;