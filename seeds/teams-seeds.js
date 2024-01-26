const { Teams } = require('../models');

const teamData = [
    {
        team_name: 'Anaheim Ducks',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Anaheim_Ducks.svg/800px-Anaheim_Ducks.svg.png',
    },
    {
        team_name: 'Arizona Coyotes',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Arizona_Coyotes_logo_%282021%29.svg',
    },
    {
        team_name: 'Boston Bruins',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Boston_Bruins.svg/1200px-Boston_Bruins.svg.png',
    },
    {
        team_name: 'Buffalo Sabres',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Buffalo_Sabres_Logo.svg/1200px-Buffalo_Sabres_Logo.svg.png',
    },
    {
        team_name: 'Calgary Flames',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Calgary_Flames_logo.svg/640px-Calgary_Flames_logo.svg.png',
    },
    {
        team_name: 'Carolina Hurricanes',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Carolina_Hurricanes.svg/800px-Carolina_Hurricanes.svg.png',
    },
    {
        team_name: 'Chicago Blackhawks',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Chicago_Blackhawks_logo.svg/800px-Chicago_Blackhawks_logo.svg.png',
    },
    {
        team_name: 'Colorado Avalanche',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Colorado_Avalanche_logo.svg/800px-Colorado_Avalanche_logo.svg.png',
    },
    {
        team_name: 'Columbus Blue Jackets',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/800px-Columbus_Blue_Jackets_logo.svg.png',
    },
    {
        team_name: 'Dallas Stars',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Dallas_Stars_logo_%282013%29.svg/800px-Dallas_Stars_logo_%282013%29.svg.png',
    },
    {
        team_name: 'Detroit Red Wings',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/800px-Detroit_Red_Wings_logo.svg.png',
    },
    {
        team_name: 'Edmonton Oilers',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/800px-Logo_Edmonton_Oilers.svg.png',
    },
    {
        team_name: 'Florida Panthers',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Florida_Panthers_2016_logo.svg/800px-Florida_Panthers_2016_logo.svg.png',
    },
    {
        team_name: 'Los Angeles Kings',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Los_Angeles_Kings_logo.svg/800px-Los_Angeles_Kings_logo.svg.png',
    },
    {
        team_name: 'Minnesota Wild',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Minnesota_Wild.svg/800px-Minnesota_Wild.svg.png',
    },
    {
        team_name: 'Montreal Canadiens',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Montreal_Canadiens.svg/800px-Montreal_Canadiens.svg.png',
    },
    {
        team_name: 'Nashville Predators',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Nashville_Predators_Logo_%282011%29.svg/800px-Nashville_Predators_Logo_%282011%29.svg.png',
    },
    {
        team_name: 'New Jersey Devils',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/New_Jersey_Devils_logo.svg/1200px-New_Jersey_Devils_logo.svg.png',
    },
    {
        team_name: 'New York Islanders',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Logo_New_York_Islanders.svg/1200px-Logo_New_York_Islanders.svg.png',
    },
    {
        team_name: 'New York Rangers',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Rangers.svg/1200px-New_York_Rangers.svg.png',
    },
    {
        team_name: 'Ottawa Senators',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ottawa_Senators_2020-2021_logo.svg/800px-Ottawa_Senators_2020-2021_logo.svg.png',
    },
    {
        team_name: 'Philadelphia Flyers',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Philadelphia_Flyers.svg/800px-Philadelphia_Flyers.svg.png',
    },
    {
        team_name: 'Pittsburgh Penguins',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/800px-Pittsburgh_Penguins_logo_%282016%29.svg.png',
    },
    {
        team_name: 'San Jose Sharks',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/800px-SanJoseSharksLogo.svg.png',
    },
    {
        team_name: 'St. Louis Blues',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/St._Louis_Blues_logo.svg/800px-St._Louis_Blues_logo.svg.png',
    },
    {
        team_name: 'Tampa Bay Lightning',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Tampa_Bay_Lightning_2011.svg',
    },
    {
        team_name: 'Toronto Maple Leafs',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/800px-Toronto_Maple_Leafs_2016_logo.svg.png',
    },
    {
        team_name: 'Vancouver Canucks',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Vancouver_Canucks_logo.svg/800px-Vancouver_Canucks_logo.svg.png',
    },
    {
        team_name: 'Vegas Golden Knights',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Vegas_Golden_Knights_logo.svg/800px-Vegas_Golden_Knights_logo.svg.png',
    },
    {
        team_name: 'Washington Capitals',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Washington_Capitals.svg/1200px-Washington_Capitals.svg.png',
    },
    {
        team_name: 'Winnipeg Jets',
        league_id: 1,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/800px-Winnipeg_Jets_Logo_2011.svg.png',
    },
    {
        team_name: 'Arizona Cardinals',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/0/0e/Arizona_Cardinals_logo.png',
    },
    {
        team_name: 'Atlanta Falcons',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/ro/thumb/c/c5/Atlanta_Falcons_logo.svg/1200px-Atlanta_Falcons_logo.svg.png',
    },
    {
        team_name: 'Baltimore Ravens',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/9/93/Baltimore_Ravens_logo.png',
    },
    {
        team_name: 'Buffalo Bills',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/ro/thumb/7/77/Buffalo_Bills_logo.svg/1280px-Buffalo_Bills_logo.svg.png',
    },
    {
        team_name: 'Carolina Panthers',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/5/5b/Carolina_Panthers_logo.png',
    },
    {
        team_name: 'Chicago Bears',
        league_id: 2,
        team_logo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7c0SUUZRoyHrgOSihWWdEZU8RhcYXFcUZeXOI-7GLA&s',
    },
    {
        team_name: 'Cincinnati Bengals',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/2560px-Cincinnati_Bengals_logo.svg.png',
    },
    {
        team_name: 'Cleveland Browns',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Cleveland_Browns_logo.svg/1200px-Cleveland_Browns_logo.svg.png',
    },
    {
        team_name: 'Dallas Cowboys',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/1200px-Dallas_Cowboys.svg.png',
    },
    {
        team_name: 'Denver Broncos',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/7/72/Denver_Broncos_logo.png',
    },
    {
        team_name: 'Detroit Lions',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Logo_Detroit_Lions_2017.svg/1200px-Logo_Detroit_Lions_2017.svg.png',
    },
    {
        team_name: 'Green Bay Packers',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/2560px-Green_Bay_Packers_logo.svg.png',
    },
    {
        team_name: 'Houston Texans',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/de/thumb/2/28/Houston_Texans_logo.svg/1200px-Houston_Texans_logo.svg.png',
    },
    {
        team_name: 'Indianapolis Colts',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/1200px-Indianapolis_Colts_logo.svg.png',
    },
    {
        team_name: 'Jacksonville Jaguars',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/74/Jacksonville_Jaguars_logo.svg/1200px-Jacksonville_Jaguars_logo.svg.png',
    },
    {
        team_name: 'Kansas City Chiefs',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/de/thumb/e/e1/Kansas_City_Chiefs_logo.svg/2560px-Kansas_City_Chiefs_logo.svg.png',
    },
    {
        team_name: 'Las Vegas Raiders',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/f/f1/Oakland_Raiders_logo.png',
    },
    {
        team_name: 'Los Angeles Chargers',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Los_Angeles_Chargers_logo.svg/2560px-Los_Angeles_Chargers_logo.svg.png',
    },
    {
        team_name: 'Los Angeles Rams',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/a/aa/Los_Angeles_Rams_logo.png',
    },
    {
        team_name: 'Miami Dolphins',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Miami_Dolphins_logo.svg/1200px-Miami_Dolphins_logo.svg.png',
    },
    {
        team_name: 'Minnesota Vikings',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/d/d9/Minnesota_Vikings_logo.png',
    },
    {
        team_name: 'New England Patriots',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/200px-New_England_Patriots_logo.svg.png',
    },
    {
        team_name: 'New Orleans Saints',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/840px-New_Orleans_Saints_logo.svg.png',
    },
    {
        team_name: 'New York Giants',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/2560px-New_York_Giants_logo.svg.png',
    },
    {
        team_name: 'New York Jets',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/1200px-New_York_Jets_logo.svg.png',
    },
    {
        team_name: 'Philadelphia Eagles',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c1/Logo_Philadelphia_Eagles_1996.svg/1280px-Logo_Philadelphia_Eagles_1996.svg.png',
    },
    {
        team_name: 'Pittsburgh Steelers',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/2048px-Pittsburgh_Steelers_logo.svg.png',
    },
    {
        team_name: 'San Francisco 49ers',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/2560px-San_Francisco_49ers_logo.svg.png',
    },
    {
        team_name: 'Seattle Seahawks',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/it/0/01/Seattle_Seahawks_Logo_2012.png',
    },
    {
        team_name: 'Tampa Bay Buccaneers',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/fr/1/19/Logo_Tampa_Bay_Buccaneers_2014.png',
    },
    {
        team_name: 'Tennessee Titans',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/de/thumb/3/39/Tennessee_Titans_Logo.svg/2560px-Tennessee_Titans_Logo.svg.png',
    },
    {
        team_name: 'Washington Football Team',
        league_id: 2,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Washington_Football_Team_logo.png/768px-Washington_Football_Team_logo.png',
    },
    {
        team_name: 'Atlanta Hawks',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png',
    },
    {
        team_name: 'Boston Celtics',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png',
    },
    {
        team_name: 'Brooklyn Nets',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png',
    },
    {
        team_name: 'Charlotte Hornets',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png',
    },
    {
        team_name: 'Chicago Bulls',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png',
    },
    {
        team_name: 'Cleveland Cavaliers',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1200px-Cleveland_Cavaliers_logo.svg.png',
    },
    {
        team_name: 'Dallas Mavericks',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png',
    },
    {
        team_name: 'Denver Nuggets',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1200px-Denver_Nuggets.svg.png',
    },
    {
        team_name: 'Detroit Pistons',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_of_the_Detroit_Pistons_%281978%E2%80%931996%29.png',
    },
    {
        team_name: 'Golden State Warriors',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
    },
    {
        team_name: 'Houston Rockets',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png',
    },
    {
        team_name: 'Indiana Pacers',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png',
    },
    {
        team_name: 'Los Angeles Clippers',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png',
    },
    {
        team_name: 'Los Angeles Lakers',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
    },
    {
        team_name: 'Memphis Grizzlies',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png',
    },
    {
        team_name: 'Miami Heat',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png',
    },
    {
        team_name: 'Milwaukee Bucks',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png',
    },
    {
        team_name: 'Minnesota Timberwolves',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png',
    },
    {
        team_name: 'New Orleans Pelicans',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png',
    },
    {
        team_name: 'New York Knicks',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png',
    },
    {
        team_name: 'Oklahoma City Thunder',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png',
    },
    {
        team_name: 'Orlando Magic',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Orlando_Magic_logo.svg/1200px-Orlando_Magic_logo.svg.png',
    },
    {
        team_name: 'Philadelphia 76ers',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
    },
    {
        team_name: 'Phoenix Suns',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png',
    },
    {
        team_name: 'Portland Trail Blazers',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png',
    },
    {
        team_name: 'Sacramento Kings',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png',
    },
    {
        team_name: 'San Antonio Spurs',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png',
    },
    {
        team_name: 'Toronto Raptors',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1200px-Toronto_Raptors_logo.svg.png',
    },
    {
        team_name: 'Utah Jazz',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/1200px-Utah_Jazz_logo_%282016%29.svg.png',
    },
    {
        team_name: 'Washington Wizards',
        league_id: 4,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1200px-Washington_Wizards_logo.svg.png',
    },
    {
        team_name: 'Arizona Diamondbacks',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Arizona_Diamondbacks_logo_teal.svg/1200px-Arizona_Diamondbacks_logo_teal.svg.png',
    },
    {
        team_name: 'Atlanta Braves',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Atlanta_Braves_Insignia.svg/2188px-Atlanta_Braves_Insignia.svg.png',
    },
    {
        team_name: 'Baltimore Orioles',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/1200px-Baltimore_Orioles_cap.svg.png',
    },
    {
        team_name: 'Boston Red Sox',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png',
    },
    {
        team_name: 'Chicago White Sox',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chicago_White_Sox.svg/1200px-Chicago_White_Sox.svg.png',
    },
    {
        team_name: 'Chicago Cubs',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chicago_Cubs_logo.svg/1200px-Chicago_Cubs_logo.svg.png',
    },
    {
        team_name: 'Cincinnati Reds',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cincinnati_Reds_Logo.svg/1200px-Cincinnati_Reds_Logo.svg.png',
    },
    {
        team_name: 'Cleveland Guardians',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cleveland_Guardians_cap_logo.svg/1200px-Cleveland_Guardians_cap_logo.svg.png',
    },
    {
        team_name: 'Colorado Rockies',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Colorado_Rockies_logo.svg/1200px-Colorado_Rockies_logo.svg.png',
    },
    {
        team_name: 'Detroit Tigers',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Detroit_Tigers_logo.svg/1200px-Detroit_Tigers_logo.svg.png',
    },
    {
        team_name: 'Houston Astros',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Houston-Astros-Logo.svg/1200px-Houston-Astros-Logo.svg.png',
    },
    {
        team_name: 'Kansas City Royals',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Kansas_City_Royals.svg/1200px-Kansas_City_Royals.svg.png',
    },
    {
        team_name: 'Los Angeles Angels',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Angeles_Angels_of_Anaheim.svg/1200px-Los_Angeles_Angels_of_Anaheim.svg.png',
    },
    {
        team_name: 'Los Angeles Dodgers',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Los_Angeles_Dodgers_Logo.svg/1200px-Los_Angeles_Dodgers_Logo.svg.png',
    },
    {
        team_name: 'Miami Marlins',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Marlins_team_logo.svg/1200px-Marlins_team_logo.svg.png',
    },
    {
        team_name: 'Milwaukee Brewers',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/de/thumb/1/11/Milwaukee_Brewers_Logo.svg/1200px-Milwaukee_Brewers_Logo.svg.png',
    },
    {
        team_name: 'Minnesota Twins',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/de/thumb/e/e3/Minnesota_Twins_Logo.svg/1200px-Minnesota_Twins_Logo.svg.png',
    },
    {
        team_name: 'New York Yankees',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/New_York_Yankees_logo.svg/1822px-New_York_Yankees_logo.svg.png',
    },
    {
        team_name: 'New York Mets',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1200px-New_York_Mets.svg.png',
    },
    {
        team_name: 'Oakland Athletics',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Oakland_A%27s_logo.svg',
    },
    {
        team_name: 'Philadelphia Phillies',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Philadelphia_Phillies_logo.svg/2048px-Philadelphia_Phillies_logo.svg.png',
    },
    {
        team_name: 'Pittsburgh Pirates',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pittsburgh_Pirates_logo_2014.svg/1200px-Pittsburgh_Pirates_logo_2014.svg.png',
    },
    {
        team_name: 'San Diego Padres',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SD_Logo_Brown.svg/1200px-SD_Logo_Brown.svg.png',
    },
    {
        team_name: 'San Francisco Giants',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/San_Francisco_Giants_Logo.svg/1200px-San_Francisco_Giants_Logo.svg.png',
    },
    {
        team_name: 'Seattle Mariners',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Seattle_Mariners_logo_%28low_res%29.svg/1200px-Seattle_Mariners_logo_%28low_res%29.svg.png',
    },
    {
        team_name: 'St. Louis Cardinals',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/St._Louis_Cardinals_logo.svg/1200px-St._Louis_Cardinals_logo.svg.png',
    },
    {
        team_name: 'Tampa Bay Rays',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tampa_Bay_Rays_Logo.svg/2560px-Tampa_Bay_Rays_Logo.svg.png',
    },
    {
        team_name: 'Texas Rangers',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Texas_Rangers.svg/1200px-Texas_Rangers.svg.png',
    },
    {
        team_name: 'Toronto Blue Jays',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Toronto_Blue_Jays_logo.svg/1200px-Toronto_Blue_Jays_logo.svg.png',
    },
    {
        team_name: 'Washington Nationals',
        league_id: 3,
        team_logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Washington_Nationals_logo.svg/1200px-Washington_Nationals_logo.svg.png',
    },
];

const seedTeams = () => Teams.bulkCreate(teamData);

module.exports = seedTeams;