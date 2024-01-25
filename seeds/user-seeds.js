const bcrypt = require('bcrypt');
const { User } = require('../models');

const userData = [
  {
    first_name: "John",
    last_name: "Walters",
    default_address: "37 Abbey Court\nStratford, ON\nN5A 6X3",
    username: "JohnW",
    password: "password1013",
    email: "jwalters104@gmail.com"
  },
  {
    first_name: "Stanislav",
    last_name: "Morozan",
    default_address: "1102 Fleet Street\nMississauga, ON\nL5H 3P7",
    username: "StasM",
    password: "password1012",
    email: "smorozan103@gmail.com"
  },
  {
    first_name: "Sanyam",
    last_name: "Singh",
    default_address: "5061 Churchill Meadows Bvld\nMississauga, ON\nL5M 7Z9",
    username: "SamS",
    password: "password123",
    email: "sdkln102@gmail.com"
  },
  {
    first_name: "Nicholas",
    last_name: "Lee",
    default_address: "257 Pathfinder Drive\nMississauga, ON\nL5A 1C7",
    username: "NickLee",
    password: "password456",
    email: "nlee101@gmail.com"
  },
  {
    first_name: "Karla",
    last_name: "Wubbenhorst",
    default_address: "54 Raspberry Lane\nGuelph, Ontario\nN1E 7H5",
    username: "KarlaW",
    password: "password789",
    email: "kwubbenhorst@gmail.com"
  },
  {
    first_name: "Alejandro",
    last_name: "Rodriguez",
    default_address: "295 Holloway Terrace\nMilton, ON\nL9T 3X8",
    username: "AlejandroR",
    password: "password1013",
    email: "arodriguez104@gmail.com"
  },
  {
    first_name: "Mei",
    last_name: "Chen",
    default_address: "12 Valley Ridge Lane\nFlamborough, ON\nL8N 2Z7",
    username: "MeiChen",
    password: "password1014",
    email: "mchen105@gmail.com"
  },
  {
    first_name: "Hassan",
    last_name: "Ali",
    default_address: "5918 Algarve Drive\nMississauga, ON\nL5M 6R7",
    username: "HassanAli",
    password: "password1015",
    email: "hali106@gmail.com"
  },
  {
    first_name: "Isabella",
    last_name: "Santos",
    default_address: "1308 Chee Chee Landing\nMilton, ON\nL9E 1L2",
    username: "IzzyS",
    password: "password1016",
    email: "isantos107@gmail.com"
  },
  {
    first_name: "Raj",
    last_name: "Patel",
    default_address: "3825 Bloomington Crescent\nMississauga, ON\nL5M 0A3",
    username: "RajPatel",
    password: "password1017",
    email: "rpatel108@gmail.com"
  },
  {
    first_name: "Aisha",
    last_name: "Williams",
    default_address: "2141 Oakpoint Rd\nOakville, ON\nL6M 3N2",
    username: "AishaW",
    password: "password1018",
    email: "awilliams109@gmail.com"
  },
  {
    first_name: "Luca",
    last_name: "Ferrari",
    default_address: "1211 Cottonwood Crescent\nOakville, ON\nL6M 2W6",
    username: "LucaFerrari",
    password: "password1019",
    email: "lferrari110@gmail.com"
  },
  {
    first_name: "Priya",
    last_name: "Kapoor",
    default_address: "808 Agnew Crescent\nMilton, ON\nL9T 8M5",
    username: "PriyaK",
    password: "password1020",
    email: "pkapoor111@gmail.com"
  },
  {
    first_name: "Malik",
    last_name: "Johnson",
    default_address: "113 Wheeler Court\nRockwood, ON\nN0B 2K0",
    username: "MalikJ",
    password: "password1021",
    email: "mjohnson112@gmail.com"
  },
  {
    first_name: "Olga",
    last_name: "Ivanova",
    default_address: "15 Alphonse Crescent\nMississauga, ON\nL5M 1A4",
    username: "OlgaIvanova",
    password: "password1022",
    email: "oivanova113@gmail.com"
  },
  {
    first_name: "Tarique",
    last_name: "Moatar",
    default_address: "7482 Black Walnut Terrace\nMississauga, ON\nL5N 8B1",
    username: "TariqueM",
    password: "password1023",
    email: "tmoatar114@gmail.com",
    role: "manager"
  },
  {
    first_name: "Camila",
    last_name: "Costa",
    default_address: "634 Asleton Bvld\nMilton, ON\nL9T 8K7",
    username: "CamilaC",
    password: "password1024",
    email: "ccosta115@gmail.com"
  },
  {
    first_name: "Mikhail",
    last_name: "Petrov",
    default_address: "64103 Lorne Hill Road\nSpringfield, MB\nR5R 0K1",
    username: "MikeP",
    password: "password1025",
    email: "mpetrov116@gmail.com"
  },
  {
    first_name: "Gabriela",
    last_name: "Gonzalez",
    default_address: "2860 Sunnyside Road\nAnmore, BC\nV3H 4Y7",
    username: "GabrielaG",
    password: "password1026",
    email: "ggonzalez117@gmail.com"
  },
  {
    first_name: "Kwama",
    last_name: "Boateng",
    default_address: "209 64th Av W\nVancouver, BC\nV5X 2L7",
    username: "KwamaB",
    password: "password1027",
    email: "kboateng118@gmail.com"
  },
  {
    first_name: "Ali",
    last_name: "Maqsood",
    default_address: "1825 Esquimalt Avenue\nWest Vancouver, British Columbia\nV7V 1S1",
    username: "AliM",
    password: "password1028",
    email: "amaqsood119@gmail.com"
  },
  {
    first_name: "Leila",
    last_name: "Nguyễn",
    default_address: "1425 Av. Panama\nBrossard, QC\nJ4W 2G3",
    username: "LeilaN",
    password: "password1029",
    email: "lnguyen120@gmail.com"
  },
  {
    first_name: "Dmitri",
    last_name: "Papadopoulos",
    default_address: "17185 Rue Jacques-Cartier\nMirabel, QC\nJ7J 0P6",
    username: "DmitriP",
    password: "password1030",
    email: "dpapadopoulos121@gmail.com"
  },
  {
    first_name: "Fatima",
    last_name: "Ahmed",
    default_address: "137 Penrose Street\nMoncton, NB\nE1E 4W7",
    username: "FatimaA",
    password: "password1031",
    email: "fahmed122@gmail.com"
  },
  {
    first_name: "Andrej",
    last_name: "Novak",
    default_address: "105 Terrace Heights Drive\nNew Glasgow, NS\nB2H 5V8",
    username: "AndrewN",
    password: "password1032",
    email: "anovak123@gmail.com"
  },
  {
    first_name: "Maya",
    last_name: "Fraser",
    default_address: "405 Wisteria Lane\nUpper Tantallon, NS\nB3Z 4L1",
    username: "MayaF",
    password: "password1033",
    email: "mfraser124@gmail.com"
  },
  {
    first_name: "Tariq",
    last_name: "Mansoori",
    default_address: "40 Hutchison Court\nCharlottetown, PE\nC1A 8H7",
    username: "TariqM",
    password: "password1034",
    email: "tmansoori125@gmail.com"
  },
  {
    first_name: "Katarina",
    last_name: "Vukovic",
    default_address: "15 Fulton Drive\nSherwood, PE\nC1A 8X6",
    username: "KatyV",
    password: "password1035",
    email: "kvukovic126@gmail.com"
  },
  {
    first_name: "Malikah",
    last_name: "Khan",
    default_address: "33 Wicklow Street\nSt. John’s, NL\nA1B 3H4",
    username: "MalikahK",
    password: "password1036",
    email: "mkhan127@gmail.com"
  },
  {
    first_name: "Daniel",
    last_name: "Silva",
    default_address: "50 Westview Dr SW\nCalgary AB T3C 2R7",
    username: "DanS",
    password: "password1037",
    email: "dsilva128@gmail.com"
  }
];

const seedUsers = async () => {
  const saltRounds = 10; 

  // Hash passwords before inserting into the database, this will allow for them to match what is posted in the body for testing.
  const hashedUsersData = await Promise.all(userData.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    return { ...user, password: hashedPassword };
  }));

  // Insert userData with hashed passwords into the database
  await User.bulkCreate(hashedUsersData);
};

module.exports = seedUsers;