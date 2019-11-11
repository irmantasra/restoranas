import React from "react";
import Table from "./Table";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Clients() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Table
                title='Klientai'
                columns={mockData.columns}
                data={mockData.data}
            />
        </Container>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
}));

const mockData = {
    columns: [
        { title: "Prisijungimo vardas", field: "username" },
        { title: "Slaptažodis", field: "password" },
        { title: "Vardas", field: "name" },
        { title: "Pavardė", field: "surname" },
        { title: "Gimimo data", field: "birthDate", type: "numeric" },
        { title: "Adresas", field: "address"},
        { title: "El. pašto adresas", field: "email"}
    ],
    data: [{
        "username": "gmcshirie0",
        "name": "Gail",
        "surname": "McShirie",
        "email": "gmcshirie0@addtoany.com",
        "password": "h2UnzV1I",
        "address": "8570 Rockefeller Place",
        "birthDate": "5/4/1972"
      }, {
        "username": "dshilito1",
        "name": "Dita",
        "surname": "Shilito",
        "email": "dshilito1@wufoo.com",
        "password": "iBstJcfZ",
        "address": "23 6th Hill",
        "birthDate": "7/23/2005"
      }, {
        "username": "abresson2",
        "name": "Aubert",
        "surname": "Bresson",
        "email": "abresson2@exblog.jp",
        "password": "l3wWdFG",
        "address": "36 Cottonwood Way",
        "birthDate": "8/30/1982"
      }, {
        "username": "fmartineau3",
        "name": "Francois",
        "surname": "Martineau",
        "email": "fmartineau3@baidu.com",
        "password": "GoN96g1",
        "address": "681 Manley Park",
        "birthDate": "4/5/2010"
      }, {
        "username": "cchesterton4",
        "name": "Cathleen",
        "surname": "Chesterton",
        "email": "cchesterton4@un.org",
        "password": "CuCVWB",
        "address": "0762 Duke Road",
        "birthDate": "8/9/1967"
      }, {
        "username": "ddurtnel5",
        "name": "Dolf",
        "surname": "Durtnel",
        "email": "ddurtnel5@shop-pro.jp",
        "password": "26zYTKA62",
        "address": "916 Fallview Hill",
        "birthDate": "4/7/1989"
      }, {
        "username": "ftalbot6",
        "name": "Fee",
        "surname": "Talbot",
        "email": "ftalbot6@boston.com",
        "password": "AQjX5K",
        "address": "21931 Saint Paul Pass",
        "birthDate": "8/25/1996"
      }, {
        "username": "egohn7",
        "name": "Engelbert",
        "surname": "Gohn",
        "email": "egohn7@kickstarter.com",
        "password": "mzdwf59u",
        "address": "1458 Delladonna Way",
        "birthDate": "2/18/1993"
      }, {
        "username": "jrozec8",
        "name": "Jordon",
        "surname": "Rozec",
        "email": "jrozec8@clickbank.net",
        "password": "ge02Yt",
        "address": "99 South Road",
        "birthDate": "9/29/1941"
      }, {
        "username": "tscottesmoor9",
        "name": "Tess",
        "surname": "Scottesmoor",
        "email": "tscottesmoor9@ebay.com",
        "password": "z6HGPLhVRtu",
        "address": "74343 Coolidge Lane",
        "birthDate": "8/24/2002"
      }, {
        "username": "jdringa",
        "name": "Jewel",
        "surname": "Dring",
        "email": "jdringa@apache.org",
        "password": "N1W1vAm5",
        "address": "79 High Crossing Lane",
        "birthDate": "9/11/1952"
      }, {
        "username": "iflockhartb",
        "name": "Inigo",
        "surname": "Flockhart",
        "email": "iflockhartb@smh.com.au",
        "password": "qlqD1k",
        "address": "9 Alpine Road",
        "birthDate": "5/5/2019"
      }, {
        "username": "jnegroc",
        "name": "Jesselyn",
        "surname": "Negro",
        "email": "jnegroc@washingtonpost.com",
        "password": "vAUyPbN",
        "address": "89 Pleasure Street",
        "birthDate": "6/6/1962"
      }, {
        "username": "rkirbyd",
        "name": "Raychel",
        "surname": "Kirby",
        "email": "rkirbyd@loc.gov",
        "password": "uwkkcQ9lk",
        "address": "0 Vernon Point",
        "birthDate": "10/15/1931"
      }, {
        "username": "checkse",
        "name": "Cornall",
        "surname": "Hecks",
        "email": "checkse@bloglovin.com",
        "password": "movbjw8K",
        "address": "1 Spaight Center",
        "birthDate": "6/20/1971"
      }, {
        "username": "bdonnettf",
        "name": "Belia",
        "surname": "Donnett",
        "email": "bdonnettf@4shared.com",
        "password": "dfHF9RS",
        "address": "586 Russell Court",
        "birthDate": "8/24/1954"
      }, {
        "username": "ylahiffg",
        "name": "Yorke",
        "surname": "Lahiff",
        "email": "ylahiffg@slideshare.net",
        "password": "KDCB60lL9t",
        "address": "24 Maryland Park",
        "birthDate": "1/25/1932"
      }, {
        "username": "randrettih",
        "name": "Roobbie",
        "surname": "Andretti",
        "email": "randrettih@digg.com",
        "password": "tBf9kuE",
        "address": "07837 1st Drive",
        "birthDate": "3/28/2013"
      }, {
        "username": "fsobeyi",
        "name": "Freddy",
        "surname": "Sobey",
        "email": "fsobeyi@fema.gov",
        "password": "5yGYuz",
        "address": "571 Prentice Terrace",
        "birthDate": "1/10/1955"
      }, {
        "username": "slittletonj",
        "name": "Sterne",
        "surname": "Littleton",
        "email": "slittletonj@deviantart.com",
        "password": "GnrtbUczz",
        "address": "4750 Hollow Ridge Street",
        "birthDate": "5/15/1919"
      }, {
        "username": "jwegnerk",
        "name": "Jeffie",
        "surname": "Wegner",
        "email": "jwegnerk@elegantthemes.com",
        "password": "QPCJwKPEQVw",
        "address": "855 1st Avenue",
        "birthDate": "6/15/1994"
      }, {
        "username": "tnutleyl",
        "name": "Tessa",
        "surname": "Nutley",
        "email": "tnutleyl@businesswire.com",
        "password": "OBFk72qOc",
        "address": "83 Fairfield Terrace",
        "birthDate": "12/31/1936"
      }, {
        "username": "ccalverdm",
        "name": "Cassie",
        "surname": "Calverd",
        "email": "ccalverdm@youtu.be",
        "password": "m2gQ7UHsdyK",
        "address": "1053 Eagan Drive",
        "birthDate": "12/29/1932"
      }, {
        "username": "dbenfelln",
        "name": "Donetta",
        "surname": "Benfell",
        "email": "dbenfelln@reference.com",
        "password": "oPqpeh",
        "address": "0 Express Plaza",
        "birthDate": "2/1/1931"
      }, {
        "username": "dthurlowo",
        "name": "Damiano",
        "surname": "Thurlow",
        "email": "dthurlowo@cmu.edu",
        "password": "4MSxmoN",
        "address": "5963 Farmco Crossing",
        "birthDate": "8/29/1938"
      }, {
        "username": "cpeiserp",
        "name": "Carolus",
        "surname": "Peiser",
        "email": "cpeiserp@mapquest.com",
        "password": "eARH0aAEQ",
        "address": "1 Summit Trail",
        "birthDate": "6/10/1929"
      }, {
        "username": "rgumaryq",
        "name": "Rafferty",
        "surname": "Gumary",
        "email": "rgumaryq@fema.gov",
        "password": "RRiSDTz",
        "address": "1526 Calypso Way",
        "birthDate": "7/26/2015"
      }, {
        "username": "pmossr",
        "name": "Pepi",
        "surname": "Moss",
        "email": "pmossr@gizmodo.com",
        "password": "oHIMlqD9",
        "address": "5845 Haas Circle",
        "birthDate": "5/28/1937"
      }, {
        "username": "syoles",
        "name": "Sandy",
        "surname": "Yole",
        "email": "syoles@unesco.org",
        "password": "IxsFofa5",
        "address": "506 Sommers Road",
        "birthDate": "2/25/1951"
      }, {
        "username": "swillgooset",
        "name": "Stanleigh",
        "surname": "Willgoose",
        "email": "swillgooset@angelfire.com",
        "password": "kmhEblLF",
        "address": "0 Grim Lane",
        "birthDate": "11/5/1927"
      }, {
        "username": "nwressellu",
        "name": "Nowell",
        "surname": "Wressell",
        "email": "nwressellu@comcast.net",
        "password": "ABtfOmdV",
        "address": "39099 Schlimgen Terrace",
        "birthDate": "5/11/1919"
      }, {
        "username": "kbirdv",
        "name": "Karolina",
        "surname": "Bird",
        "email": "kbirdv@comcast.net",
        "password": "7SPtoyk",
        "address": "651 Londonderry Plaza",
        "birthDate": "6/22/1940"
      }, {
        "username": "ggillerw",
        "name": "Galina",
        "surname": "Giller",
        "email": "ggillerw@timesonline.co.uk",
        "password": "nTssU9F7",
        "address": "895 Hauk Pass",
        "birthDate": "10/27/1944"
      }, {
        "username": "tnottingamx",
        "name": "Tim",
        "surname": "Nottingam",
        "email": "tnottingamx@ihg.com",
        "password": "RktTHD",
        "address": "5 Lawn Street",
        "birthDate": "10/17/1929"
      }, {
        "username": "qdaycey",
        "name": "Quill",
        "surname": "Dayce",
        "email": "qdaycey@ca.gov",
        "password": "fCUopmOj6",
        "address": "2 Iowa Way",
        "birthDate": "12/21/1923"
      }, {
        "username": "gduncanz",
        "name": "Giorgia",
        "surname": "Duncan",
        "email": "gduncanz@sciencedirect.com",
        "password": "1V4flDppl",
        "address": "85787 Rieder Drive",
        "birthDate": "2/27/1991"
      }, {
        "username": "tamner10",
        "name": "Teresa",
        "surname": "Amner",
        "email": "tamner10@tripadvisor.com",
        "password": "whrnCP25L6nb",
        "address": "165 Straubel Hill",
        "birthDate": "12/4/2006"
      }, {
        "username": "jlepiscopio11",
        "name": "Jarrod",
        "surname": "L'Episcopio",
        "email": "jlepiscopio11@sfgate.com",
        "password": "buXyf8tE",
        "address": "51672 Morning Circle",
        "birthDate": "1/16/1967"
      }, {
        "username": "dgodin12",
        "name": "Dian",
        "surname": "Godin",
        "email": "dgodin12@cbslocal.com",
        "password": "xjSckWYqJp",
        "address": "2 Algoma Point",
        "birthDate": "2/22/1966"
      }, {
        "username": "koneill13",
        "name": "Kimble",
        "surname": "O'Neill",
        "email": "koneill13@i2i.jp",
        "password": "7XYzgk",
        "address": "977 Briar Crest Pass",
        "birthDate": "10/26/1940"
      }, {
        "username": "tdundredge14",
        "name": "Tobe",
        "surname": "Dundredge",
        "email": "tdundredge14@example.com",
        "password": "jFje16NizT7",
        "address": "6 Vidon Way",
        "birthDate": "4/13/2006"
      }, {
        "username": "mcure15",
        "name": "Maisie",
        "surname": "Cure",
        "email": "mcure15@arizona.edu",
        "password": "hP0BZUgo",
        "address": "2004 Comanche Court",
        "birthDate": "3/13/1927"
      }, {
        "username": "cwalsh16",
        "name": "Currie",
        "surname": "Walsh",
        "email": "cwalsh16@com.com",
        "password": "UjddAvCuhuj4",
        "address": "910 Petterle Drive",
        "birthDate": "4/20/1953"
      }, {
        "username": "kextance17",
        "name": "Kimble",
        "surname": "Extance",
        "email": "kextance17@delicious.com",
        "password": "tyRPpCojJ",
        "address": "74 Nevada Street",
        "birthDate": "6/24/1949"
      }, {
        "username": "sbraidwood18",
        "name": "Sunny",
        "surname": "Braidwood",
        "email": "sbraidwood18@yahoo.com",
        "password": "LpSX9Lcyi",
        "address": "80 Merry Park",
        "birthDate": "9/16/1976"
      }, {
        "username": "lbilt19",
        "name": "Lizabeth",
        "surname": "Bilt",
        "email": "lbilt19@pinterest.com",
        "password": "iWkq3u6Y0eHN",
        "address": "4 Service Parkway",
        "birthDate": "2/6/1984"
      }, {
        "username": "amargett1a",
        "name": "Andonis",
        "surname": "Margett",
        "email": "amargett1a@slashdot.org",
        "password": "3yar1W9QA",
        "address": "76333 Division Trail",
        "birthDate": "4/10/1946"
      }, {
        "username": "bgibbett1b",
        "name": "Buckie",
        "surname": "Gibbett",
        "email": "bgibbett1b@qq.com",
        "password": "SnirqcND9x8",
        "address": "8001 Eagan Park",
        "birthDate": "3/11/2008"
      }, {
        "username": "mpetrussi1c",
        "name": "Marina",
        "surname": "Petrussi",
        "email": "mpetrussi1c@hugedomains.com",
        "password": "upLdroZ",
        "address": "75797 Pepper Wood Terrace",
        "birthDate": "6/15/1995"
      }, {
        "username": "atarquini1d",
        "name": "Abbey",
        "surname": "Tarquini",
        "email": "atarquini1d@newsvine.com",
        "password": "FgiTYYd",
        "address": "1363 Parkside Hill",
        "birthDate": "5/22/1944"
      }, {
        "username": "cdenge1e",
        "name": "Carree",
        "surname": "Denge",
        "email": "cdenge1e@jugem.jp",
        "password": "tWLKQJfVD6",
        "address": "90374 Park Meadow Hill",
        "birthDate": "12/7/1953"
      }, {
        "username": "cheaysman1f",
        "name": "Cully",
        "surname": "Heaysman",
        "email": "cheaysman1f@time.com",
        "password": "PMzEA7",
        "address": "8288 Burrows Plaza",
        "birthDate": "6/18/1955"
      }, {
        "username": "rbruna1g",
        "name": "Reese",
        "surname": "Bruna",
        "email": "rbruna1g@cisco.com",
        "password": "cICIUkJn1",
        "address": "7 Kim Road",
        "birthDate": "3/7/2016"
      }, {
        "username": "aallmark1h",
        "name": "Arlyn",
        "surname": "Allmark",
        "email": "aallmark1h@storify.com",
        "password": "JnHsqsl",
        "address": "4 Fordem Circle",
        "birthDate": "6/2/1965"
      }, {
        "username": "rkinneally1i",
        "name": "Robinette",
        "surname": "Kinneally",
        "email": "rkinneally1i@netlog.com",
        "password": "kR5Vsatjqeul",
        "address": "20526 Crescent Oaks Point",
        "birthDate": "7/18/2019"
      }, {
        "username": "btreneman1j",
        "name": "Burr",
        "surname": "Treneman",
        "email": "btreneman1j@amazon.com",
        "password": "C4KfnD4QDlh",
        "address": "48939 Northwestern Place",
        "birthDate": "8/15/2019"
      }, {
        "username": "cliddel1k",
        "name": "Cati",
        "surname": "Liddel",
        "email": "cliddel1k@whitehouse.gov",
        "password": "674iMbr2X6rc",
        "address": "8 Farwell Alley",
        "birthDate": "12/22/2000"
      }, {
        "username": "jstockill1l",
        "name": "Joelie",
        "surname": "Stockill",
        "email": "jstockill1l@jiathis.com",
        "password": "KT7PyDb",
        "address": "300 Graedel Lane",
        "birthDate": "1/12/1977"
      }, {
        "username": "twarman1m",
        "name": "Tallie",
        "surname": "Warman",
        "email": "twarman1m@shareasale.com",
        "password": "d11J1wV",
        "address": "662 Iowa Avenue",
        "birthDate": "1/14/1963"
      }, {
        "username": "lradford1n",
        "name": "Lory",
        "surname": "Radford",
        "email": "lradford1n@shinystat.com",
        "password": "n8IioH7LX7D",
        "address": "77 Moland Point",
        "birthDate": "2/2/2019"
      }, {
        "username": "tealam1o",
        "name": "Terrence",
        "surname": "Ealam",
        "email": "tealam1o@angelfire.com",
        "password": "dvBYzKaBfoo",
        "address": "2 Dakota Trail",
        "birthDate": "12/13/1968"
      }, {
        "username": "klorkin1p",
        "name": "Kristina",
        "surname": "Lorkin",
        "email": "klorkin1p@indiatimes.com",
        "password": "3a2Ngt",
        "address": "5 Northridge Center",
        "birthDate": "8/7/2019"
      }, {
        "username": "cblencoe1q",
        "name": "Carree",
        "surname": "Blencoe",
        "email": "cblencoe1q@pbs.org",
        "password": "akx6t7jpiGy",
        "address": "0 Sloan Circle",
        "birthDate": "12/5/1994"
      }, {
        "username": "ffernao1r",
        "name": "Fleurette",
        "surname": "Fernao",
        "email": "ffernao1r@wordpress.com",
        "password": "8qAAbF7D",
        "address": "0377 Eagan Lane",
        "birthDate": "4/7/2014"
      }, {
        "username": "kwalsham1s",
        "name": "Kenn",
        "surname": "Walsham",
        "email": "kwalsham1s@delicious.com",
        "password": "MUb6uGL5G",
        "address": "26 Steensland Pass",
        "birthDate": "12/21/1953"
      }, {
        "username": "lfollos1t",
        "name": "Lauren",
        "surname": "Follos",
        "email": "lfollos1t@accuweather.com",
        "password": "1cVaSuQzL",
        "address": "721 Schlimgen Center",
        "birthDate": "1/26/1981"
      }, {
        "username": "ghartin1u",
        "name": "Gideon",
        "surname": "Hartin",
        "email": "ghartin1u@google.com.br",
        "password": "kBhAMks6h4",
        "address": "8459 Graceland Road",
        "birthDate": "9/30/1959"
      }, {
        "username": "wobal1v",
        "name": "Waldemar",
        "surname": "Obal",
        "email": "wobal1v@shutterfly.com",
        "password": "zZQcCt",
        "address": "813 Fuller Parkway",
        "birthDate": "11/7/1974"
      }, {
        "username": "agiovanardi1w",
        "name": "Alys",
        "surname": "Giovanardi",
        "email": "agiovanardi1w@desdev.cn",
        "password": "mylIZ4PMuCsk",
        "address": "89199 Elgar Parkway",
        "birthDate": "6/12/2005"
      }, {
        "username": "prove1x",
        "name": "Pauletta",
        "surname": "Rove",
        "email": "prove1x@tiny.cc",
        "password": "i2yv8ngq",
        "address": "49098 Sauthoff Road",
        "birthDate": "11/15/1922"
      }, {
        "username": "anolton1y",
        "name": "Alyson",
        "surname": "Nolton",
        "email": "anolton1y@sitemeter.com",
        "password": "o1y8dbd",
        "address": "4355 Stone Corner Plaza",
        "birthDate": "10/13/1970"
      }, {
        "username": "rshelsher1z",
        "name": "Ruthi",
        "surname": "Shelsher",
        "email": "rshelsher1z@bing.com",
        "password": "NnMZ9y1ihDD",
        "address": "55 Division Avenue",
        "birthDate": "8/10/1960"
      }, {
        "username": "dboyn20",
        "name": "Daisie",
        "surname": "Boyn",
        "email": "dboyn20@kickstarter.com",
        "password": "WHIjvgAj",
        "address": "99180 Manufacturers Terrace",
        "birthDate": "11/22/1967"
      }, {
        "username": "cadamiec21",
        "name": "Cornelle",
        "surname": "Adamiec",
        "email": "cadamiec21@disqus.com",
        "password": "xdWZwHhyjh4m",
        "address": "5911 Westerfield Avenue",
        "birthDate": "11/26/1940"
      }, {
        "username": "johern22",
        "name": "Jephthah",
        "surname": "O'Hern",
        "email": "johern22@usgs.gov",
        "password": "O4FxzFg",
        "address": "57825 Algoma Crossing",
        "birthDate": "3/14/1945"
      }]
}