import React from "react";
import Table from "./Table";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Staff() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Table
                title='Personalo nariai'
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
        { title: "Vardas", field: "name" },
        { title: "Pavardė", field: "surname" },
        { title: "Gimimo data", field: "birthYear", type: "numeric" },
        { title: "Asmens kodas", field: "personalId", type: "numeric" },
        {
            title: "Etatas",
            field: "workTime",
            lookup: { 0: "0.5", 1: "0.75", 2: "1" }
        },
        { title: "Valandinis atlyginimas", field: "hourlyWage", type: "numeric"},
        { title: "Adresas", field: "address"},
        { title: "El. pašto adresas", field: "email"}
    ],
    data: [{
        "workTime": 2,
        "name": "Bridget",
        "surname": "Belderfield",
        "email": "bbelderfield0@is.gd",
        "birthYear": "10/21/1981",
        "personalId": 3008745422173,
        "hourlyWage": 4.3,
        "address": "263 Meadow Valley Road"
      }, {
        "workTime": 0,
        "name": "Rhodia",
        "surname": "Learmouth",
        "email": "rlearmouth1@yellowbook.com",
        "birthYear": "5/17/1992",
        "personalId": 4921184166466,
        "hourlyWage": 4.21,
        "address": "9 Northview Road"
      }, {
        "workTime": 0,
        "name": "Florrie",
        "surname": "Gyngell",
        "email": "fgyngell2@telegraph.co.uk",
        "birthYear": "10/7/1983",
        "personalId": 3163542699914,
        "hourlyWage": 5.89,
        "address": "02 Acker Center"
      }, {
        "workTime": 1,
        "name": "Kathleen",
        "surname": "Keesman",
        "email": "kkeesman3@msu.edu",
        "birthYear": "1/8/1992",
        "personalId": 4957421314245,
        "hourlyWage": 5.57,
        "address": "38 Jenna Pass"
      }, {
        "workTime": 0,
        "name": "Tynan",
        "surname": "Perree",
        "email": "tperree4@cdc.gov",
        "birthYear": "5/19/1973",
        "personalId": 4676039559704,
        "hourlyWage": 4.86,
        "address": "10441 Pond Lane"
      }, {
        "workTime": 1,
        "name": "Ursulina",
        "surname": "Bette",
        "email": "ubette5@marketwatch.com",
        "birthYear": "6/6/1986",
        "personalId": 3413576787583,
        "hourlyWage": 5.54,
        "address": "0 Moose Way"
      }, {
        "workTime": 1,
        "name": "Hakim",
        "surname": "Risdall",
        "email": "hrisdall6@pinterest.com",
        "birthYear": "11/22/1997",
        "personalId": 3102238022621,
        "hourlyWage": 5.07,
        "address": "437 7th Avenue"
      }, {
        "workTime": 1,
        "name": "Jarred",
        "surname": "Pesic",
        "email": "jpesic7@rambler.ru",
        "birthYear": "11/23/1994",
        "personalId": 3977472922762,
        "hourlyWage": 5.67,
        "address": "3936 Clemons Park"
      }, {
        "workTime": 1,
        "name": "Yale",
        "surname": "Iltchev",
        "email": "yiltchev8@intel.com",
        "birthYear": "9/15/1975",
        "personalId": 4453085593618,
        "hourlyWage": 3.73,
        "address": "05 Crest Line Circle"
      }, {
        "workTime": 2,
        "name": "Belva",
        "surname": "Whitnell",
        "email": "bwhitnell9@foxnews.com",
        "birthYear": "9/21/1980",
        "personalId": 3209500344507,
        "hourlyWage": 5.11,
        "address": "427 Bashford Terrace"
      }, {
        "workTime": 2,
        "name": "Lisle",
        "surname": "Pero",
        "email": "lperoa@hhs.gov",
        "birthYear": "4/1/1986",
        "personalId": 3389870150432,
        "hourlyWage": 5.91,
        "address": "89270 Vernon Place"
      }, {
        "workTime": 0,
        "name": "Andriette",
        "surname": "Musterd",
        "email": "amusterdb@seattletimes.com",
        "birthYear": "7/3/1986",
        "personalId": 4732653687946,
        "hourlyWage": 5.25,
        "address": "462 Waubesa Point"
      }, {
        "workTime": 2,
        "name": "Berty",
        "surname": "Vogt",
        "email": "bvogtc@behance.net",
        "birthYear": "11/20/1989",
        "personalId": 3394693225337,
        "hourlyWage": 3.94,
        "address": "52 Surrey Road"
      }, {
        "workTime": 0,
        "name": "Ivory",
        "surname": "Everleigh",
        "email": "ieverleighd@lycos.com",
        "birthYear": "5/12/1992",
        "personalId": 3066188261408,
        "hourlyWage": 4.11,
        "address": "8 Tony Drive"
      }, {
        "workTime": 0,
        "name": "Edward",
        "surname": "Warrillow",
        "email": "ewarrillowe@myspace.com",
        "birthYear": "7/17/1979",
        "personalId": 3696212638602,
        "hourlyWage": 4.02,
        "address": "77043 Mayer Court"
      }, {
        "workTime": 0,
        "name": "Nickolas",
        "surname": "Yakuntsov",
        "email": "nyakuntsovf@ucoz.com",
        "birthYear": "4/28/1970",
        "personalId": 3646092415501,
        "hourlyWage": 4.07,
        "address": "91910 Forest Pass"
      }, {
        "workTime": 1,
        "name": "Brendis",
        "surname": "MacCurtain",
        "email": "bmaccurtaing@marketwatch.com",
        "birthYear": "2/3/1966",
        "personalId": 4000056155691,
        "hourlyWage": 5.73,
        "address": "20 Larry Court"
      }, {
        "workTime": 1,
        "name": "Burch",
        "surname": "Andersson",
        "email": "banderssonh@godaddy.com",
        "birthYear": "2/20/1986",
        "personalId": 3312954210013,
        "hourlyWage": 4.36,
        "address": "864 Macpherson Court"
      }, {
        "workTime": 2,
        "name": "Claudianus",
        "surname": "O'Dunniom",
        "email": "codunniomi@cornell.edu",
        "birthYear": "4/24/1982",
        "personalId": 4261121386851,
        "hourlyWage": 5.84,
        "address": "8805 Continental Way"
      }, {
        "workTime": 0,
        "name": "Vachel",
        "surname": "Buncombe",
        "email": "vbuncombej@addthis.com",
        "birthYear": "10/14/1979",
        "personalId": 4350265804300,
        "hourlyWage": 4.47,
        "address": "24549 Elka Alley"
      }, {
        "workTime": 2,
        "name": "Dore",
        "surname": "Anstis",
        "email": "danstisk@spiegel.de",
        "birthYear": "7/17/1982",
        "personalId": 4901286342074,
        "hourlyWage": 5.43,
        "address": "82 Transport Lane"
      }, {
        "workTime": 1,
        "name": "Ceciley",
        "surname": "Rraundl",
        "email": "crraundll@cpanel.net",
        "birthYear": "12/26/1994",
        "personalId": 4694964172133,
        "hourlyWage": 4.13,
        "address": "4 Bashford Pass"
      }, {
        "workTime": 2,
        "name": "Brandais",
        "surname": "Pepper",
        "email": "bpepperm@yolasite.com",
        "birthYear": "10/30/1976",
        "personalId": 4823376269973,
        "hourlyWage": 5.81,
        "address": "6019 Lindbergh Plaza"
      }, {
        "workTime": 1,
        "name": "Rodrigo",
        "surname": "Pitrelli",
        "email": "rpitrellin@woothemes.com",
        "birthYear": "9/14/1972",
        "personalId": 4878295539213,
        "hourlyWage": 4.27,
        "address": "3605 Lawn Park"
      }, {
        "workTime": 0,
        "name": "Juieta",
        "surname": "Skinley",
        "email": "jskinleyo@sitemeter.com",
        "birthYear": "10/31/1978",
        "personalId": 3201842246968,
        "hourlyWage": 4.25,
        "address": "21838 Grasskamp Drive"
      }, {
        "workTime": 0,
        "name": "Hildagarde",
        "surname": "Lodo",
        "email": "hlodop@ning.com",
        "birthYear": "5/21/1980",
        "personalId": 3330614991326,
        "hourlyWage": 3.14,
        "address": "98 Garrison Point"
      }, {
        "workTime": 0,
        "name": "Corette",
        "surname": "Rewcassell",
        "email": "crewcassellq@techcrunch.com",
        "birthYear": "11/28/1968",
        "personalId": 4439799093798,
        "hourlyWage": 3.87,
        "address": "50 Main Circle"
      }, {
        "workTime": 2,
        "name": "Trescha",
        "surname": "Bowdler",
        "email": "tbowdlerr@google.it",
        "birthYear": "5/7/1976",
        "personalId": 4714374533597,
        "hourlyWage": 3.22,
        "address": "14 Cardinal Road"
      }, {
        "workTime": 1,
        "name": "Shep",
        "surname": "Yarker",
        "email": "syarkers@hibu.com",
        "birthYear": "9/7/1989",
        "personalId": 3094188532472,
        "hourlyWage": 5.62,
        "address": "03748 Mayer Point"
      }, {
        "workTime": 0,
        "name": "Roxanna",
        "surname": "Zimmer",
        "email": "rzimmert@photobucket.com",
        "birthYear": "5/5/1984",
        "personalId": 4433691760520,
        "hourlyWage": 3.31,
        "address": "98 Summit Road"
      }]
};
