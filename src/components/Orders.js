import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Table from "./Table";
import Chart from "./Chart";
import Deposits from "./Deposits";

export default function Orders() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Table
                        title="Tiekėjai"
                        columns={mockData.columns}
                        data={mockData.data}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    }
}));

const mockData = {
    columns: [
        { title: "Nr.", field: "id" },
        { title: "Kliento slapyvardis", field: "client" },
        { title: "Adresas", field: "address" },
        { title: "El. pašto adresas", field: "email" },
        { title: "Telefono numeris", field: "phone" },
        { title: "Data", field: "date" },
        { title: "Kaina", field: "price" },
        {
            title: "Apmokėjimo statusas",
            field: "paymentStatus",
            lookup: { 0: "Neapmokėta", 1: "Apmokėta" }
        },
        { title: "Užsakymo sudėtis", field: "meal" }
    ],
    data: [
        {
            client: "bausiello0",
            date: "8/25/2019",
            price: 96.24,
            paymentType: 0,
            id: 93,
            meal: ["Vištienos ėdalas", "Uogų faršas"],
            paymentStatus: 0,
            address: "38847 Sundown Trail",
            email: "kaugie0@bloglovin.com",
            phone: "124-240-4184"
        },
        {
            client: "fcroxon1",
            date: "6/3/2019",
            price: 21.26,
            paymentType: 1,
            id: 93,
            meal: ["Gira", "Šaltibarščiai"],
            paymentStatus: 0,
            address: "1198 Sullivan Point",
            email: "vodoran1@about.me",
            phone: "851-585-2571"
        },
        {
            client: "wbalharry2",
            date: "6/24/2019",
            price: 45.59,
            paymentType: 1,
            id: 11,
            meal: ["Cola", "Kebabas", "Vištienos ėdalas"],
            paymentStatus: 1,
            address: "2934 Roxbury Plaza",
            email: "rfrankland2@state.tx.us",
            phone: "208-422-3173"
        },
        {
            client: "sdegregario3",
            date: "1/22/2019",
            price: 103.93,
            paymentType: 0,
            id: 85,
            meal: ["Pica", "Sriuba", "Gira"],
            paymentStatus: 0,
            address: "62789 Harper Alley",
            email: "edefraine3@adobe.com",
            phone: "145-174-2035"
        },
        {
            client: "lobal4",
            date: "9/23/2019",
            price: 65.25,
            paymentType: 1,
            id: 21,
            meal: [
                "Kibinas su braškėmis",
                "Kebabas",
                "Submarinas",
                "Vištienos ėdalas",
                "Cola",
                "Sriuba"
            ],
            paymentStatus: 1,
            address: "09837 Dwight Park",
            email: "mhanniger4@patch.com",
            phone: "602-901-6359"
        },
        {
            client: "hsirmon5",
            date: "11/17/2018",
            price: 126.75,
            paymentType: 1,
            id: 87,
            meal: ["Pica", "Vištienos ėdalas", "Mėsainis"],
            paymentStatus: 0,
            address: "3 Memorial Crossing",
            email: "aletford5@engadget.com",
            phone: "926-505-0476"
        },
        {
            client: "wlammie6",
            date: "7/7/2019",
            price: 77.81,
            paymentType: 0,
            id: 33,
            meal: ["Mėsainis", "Sriuba"],
            paymentStatus: 1,
            address: "73 Kropf Center",
            email: "nstainfield6@delicious.com",
            phone: "300-307-2099"
        },
        {
            client: "bmcbrearty7",
            date: "3/28/2019",
            price: 107.98,
            paymentType: 1,
            id: 89,
            meal: [
                "Submarinas",
                "Cola",
                "Kebabas",
                "Šlamštainis",
                "Sriuba",
                "Mėsainis"
            ],
            paymentStatus: 0,
            address: "3 Dunning Court",
            email: "irickett7@google.es",
            phone: "484-730-3922"
        },
        {
            client: "wfattore8",
            date: "4/12/2019",
            price: 58.43,
            paymentType: 1,
            id: 79,
            meal: ["Cola", "Pica"],
            paymentStatus: 1,
            address: "07 Portage Avenue",
            email: "shellwich8@woothemes.com",
            phone: "764-163-4523"
        },
        {
            client: "gpaladino9",
            date: "2/28/2019",
            price: 136.7,
            paymentType: 0,
            id: 84,
            meal: [
                "Uogų faršas",
                "Kibinas su braškėmis",
                "Pica",
                "Blynai",
                "Submarinas",
                "Mėsainis"
            ],
            paymentStatus: 0,
            address: "53 Dunning Place",
            email: "woldall9@admin.ch",
            phone: "260-768-0128"
        },
        {
            client: "owollraucha",
            date: "3/16/2019",
            price: 80.55,
            paymentType: 0,
            id: 54,
            meal: [
                "Kibinas su braškėmis",
                "Blynai",
                "Cola",
                "Sriuba",
                "Pica",
                "Mėsainis"
            ],
            paymentStatus: 1,
            address: "48578 Chinook Alley",
            email: "leddowesa@senate.gov",
            phone: "512-139-6125"
        },
        {
            client: "cmeedendorpeb",
            date: "8/1/2019",
            price: 235.0,
            paymentType: 1,
            id: 22,
            meal: ["Uogų faršas", "Šaltibarščiai", "Cola", "Blynai"],
            paymentStatus: 1,
            address: "83511 Stang Pass",
            email: "mjodlkowskib@ask.com",
            phone: "276-798-0145"
        },
        {
            client: "ddupreec",
            date: "6/28/2019",
            price: 95.41,
            paymentType: 0,
            id: 5,
            meal: ["Vištienos ėdalas", "Blynai"],
            paymentStatus: 0,
            address: "7 Saint Paul Pass",
            email: "bdensellc@china.com.cn",
            phone: "611-847-4621"
        },
        {
            client: "gaspd",
            date: "1/18/2019",
            price: 106.47,
            paymentType: 1,
            id: 81,
            meal: ["Blynai", "Cola", "Šaltibarščiai"],
            paymentStatus: 1,
            address: "2549 Novick Junction",
            email: "efronekd@devhub.com",
            phone: "965-183-3904"
        },
        {
            client: "dlantophe",
            date: "4/2/2019",
            price: 75.09,
            paymentType: 1,
            id: 95,
            meal: ["Vištienos ėdalas", "Uogų faršas", "Kibinas su braškėmis"],
            paymentStatus: 1,
            address: "45735 South Street",
            email: "azecchettie@omniture.com",
            phone: "137-420-4336"
        },
        {
            client: "gswantonf",
            date: "1/16/2019",
            price: 111.69,
            paymentType: 0,
            id: 59,
            meal: [
                "Blynai",
                "Kibinas su braškėmis",
                "Šlamštainis",
                "Cola",
                "Submarinas"
            ],
            paymentStatus: 1,
            address: "376 Mockingbird Crossing",
            email: "czoldf@usa.gov",
            phone: "536-777-7990"
        },
        {
            client: "ifulhamg",
            date: "3/1/2019",
            price: 240.11,
            paymentType: 0,
            id: 64,
            meal: ["Kibinas su braškėmis", "Uogų faršas", "Gira"],
            paymentStatus: 0,
            address: "789 Londonderry Place",
            email: "lkenealyg@noaa.gov",
            phone: "369-910-2673"
        },
        {
            client: "sstokeh",
            date: "4/22/2019",
            price: 155.62,
            paymentType: 0,
            id: 59,
            meal: [
                "Blynai",
                "Submarinas",
                "Sriuba",
                "Uogų faršas",
                "Kibinas su braškėmis"
            ],
            paymentStatus: 0,
            address: "68364 Bobwhite Drive",
            email: "aorteuh@merriam-webster.com",
            phone: "994-313-9032"
        },
        {
            client: "agableri",
            date: "7/26/2019",
            price: 131.32,
            paymentType: 1,
            id: 21,
            meal: ["Gira", "Cola", "Šaltibarščiai", "Submarinas", "Blynai"],
            paymentStatus: 0,
            address: "47 Grover Pass",
            email: "twilnei@artisteer.com",
            phone: "730-815-1494"
        },
        {
            client: "dswancottj",
            date: "4/14/2019",
            price: 80.72,
            paymentType: 1,
            id: 38,
            meal: [
                "Vištienos ėdalas",
                "Kebabas",
                "Mėsainis",
                "Uogų faršas",
                "Pica",
                "Šlamštainis",
                "Kibinas su braškėmis"
            ],
            paymentStatus: 1,
            address: "6279 Montana Hill",
            email: "ccribbottj@cargocollective.com",
            phone: "117-254-1312"
        },
        {
            client: "ldavidovichk",
            date: "10/14/2019",
            price: 194.47,
            paymentType: 0,
            id: 28,
            meal: ["Šlamštainis", "Šaltibarščiai"],
            paymentStatus: 0,
            address: "58050 Grasskamp Trail",
            email: "ihanstockk@bigcartel.com",
            phone: "222-656-2915"
        },
        {
            client: "lkosiadal",
            date: "1/28/2019",
            price: 163.53,
            paymentType: 1,
            id: 97,
            meal: ["Cola", "Vištienos ėdalas", "Blynai"],
            paymentStatus: 0,
            address: "31 Granby Circle",
            email: "btordoffl@arizona.edu",
            phone: "373-715-3201"
        },
        {
            client: "fstovem",
            date: "2/16/2019",
            price: 141.15,
            paymentType: 1,
            id: 82,
            meal: [
                "Sriuba",
                "Šlamštainis",
                "Submarinas",
                "Blynai",
                "Uogų faršas"
            ],
            paymentStatus: 1,
            address: "46 Hanover Parkway",
            email: "emarom@sina.com.cn",
            phone: "367-996-9108"
        },
        {
            client: "talenshevn",
            date: "9/3/2019",
            price: 127.77,
            paymentType: 1,
            id: 74,
            meal: [
                "Kebabas",
                "Uogų faršas",
                "Šaltibarščiai",
                "Submarinas",
                "Mėsainis"
            ],
            paymentStatus: 0,
            address: "3 Pierstorff Alley",
            email: "jstorryn@a8.net",
            phone: "224-760-5171"
        },
        {
            client: "sgidmano",
            date: "4/17/2019",
            price: 170.77,
            paymentType: 0,
            id: 52,
            meal: ["Gira", "Pica", "Submarinas", "Vištienos ėdalas"],
            paymentStatus: 1,
            address: "97402 Pine View Terrace",
            email: "wpavelino@linkedin.com",
            phone: "769-729-0325"
        },
        {
            client: "aohalliganp",
            date: "1/17/2019",
            price: 57.03,
            paymentType: 0,
            id: 24,
            meal: ["Šlamštainis", "Cola", "Pica"],
            paymentStatus: 0,
            address: "30603 Pawling Crossing",
            email: "ssillep@shutterfly.com",
            phone: "232-260-1442"
        },
        {
            client: "upitcaithlyq",
            date: "2/4/2019",
            price: 168.79,
            paymentType: 1,
            id: 76,
            meal: ["Uogų faršas", "Šaltibarščiai", "Kebabas", "Cola"],
            paymentStatus: 1,
            address: "6836 Jackson Circle",
            email: "rrickertq@cocolog-nifty.com",
            phone: "336-864-6999"
        },
        {
            client: "jhaltr",
            date: "7/17/2019",
            price: 17.16,
            paymentType: 1,
            id: 83,
            meal: [
                "Vištienos ėdalas",
                "Gira",
                "Cola",
                "Submarinas",
                "Pica",
                "Blynai"
            ],
            paymentStatus: 1,
            address: "326 Ryan Junction",
            email: "ghixleyr@java.com",
            phone: "693-398-1621"
        },
        {
            client: "zbauldrys",
            date: "9/27/2019",
            price: 15.49,
            paymentType: 0,
            id: 79,
            meal: [
                "Šlamštainis",
                "Submarinas",
                "Gira",
                "Kebabas",
                "Uogų faršas"
            ],
            paymentStatus: 0,
            address: "745 Anthes Crossing",
            email: "eshentons@reuters.com",
            phone: "780-167-2126"
        },
        {
            client: "npiattot",
            date: "6/12/2019",
            price: 158.64,
            paymentType: 1,
            id: 65,
            meal: ["Kebabas", "Pica"],
            paymentStatus: 1,
            address: "66080 Declaration Avenue",
            email: "lmarikhint@cargocollective.com",
            phone: "783-842-7387"
        },
        {
            client: "tblondinu",
            date: "12/16/2018",
            price: 154.94,
            paymentType: 1,
            id: 90,
            meal: [
                "Šaltibarščiai",
                "Submarinas",
                "Blynai",
                "Šlamštainis",
                "Sriuba",
                "Gira"
            ],
            paymentStatus: 1,
            address: "13 Utah Drive",
            email: "ctelegau@state.gov",
            phone: "835-208-3719"
        },
        {
            client: "smccurtv",
            date: "12/11/2018",
            price: 47.16,
            paymentType: 1,
            id: 10,
            meal: [
                "Šaltibarščiai",
                "Cola",
                "Šlamštainis",
                "Kibinas su braškėmis",
                "Gira",
                "Submarinas"
            ],
            paymentStatus: 1,
            address: "4832 Dottie Circle",
            email: "awinspearev@networkadvertising.org",
            phone: "470-830-5148"
        },
        {
            client: "melsmorew",
            date: "10/16/2019",
            price: 235.36,
            paymentType: 0,
            id: 25,
            meal: ["Šaltibarščiai", "Pica"],
            paymentStatus: 0,
            address: "8 Armistice Trail",
            email: "cwhaymanw@vk.com",
            phone: "902-301-5961"
        },
        {
            client: "skneeshawx",
            date: "9/22/2019",
            price: 169.37,
            paymentType: 0,
            id: 37,
            meal: ["Mėsainis", "Šlamštainis", "Pica", "Cola"],
            paymentStatus: 0,
            address: "51235 Fulton Circle",
            email: "tbrahamsx@netlog.com",
            phone: "936-805-5650"
        },
        {
            client: "cchittimy",
            date: "5/6/2019",
            price: 231.82,
            paymentType: 0,
            id: 28,
            meal: [
                "Mėsainis",
                "Gira",
                "Uogų faršas",
                "Blynai",
                "Šlamštainis",
                "Sriuba",
                "Kibinas su braškėmis"
            ],
            paymentStatus: 0,
            address: "7 Banding Lane",
            email: "wradborny@scientificamerican.com",
            phone: "234-805-3597"
        },
        {
            client: "jlawleyz",
            date: "12/21/2018",
            price: 217.55,
            paymentType: 0,
            id: 70,
            meal: ["Šlamštainis", "Uogų faršas", "Gira"],
            paymentStatus: 1,
            address: "39084 5th Point",
            email: "cbeelbyz@usa.gov",
            phone: "864-582-9812"
        },
        {
            client: "kdepke10",
            date: "4/10/2019",
            price: 91.74,
            paymentType: 0,
            id: 47,
            meal: [
                "Vištienos ėdalas",
                "Šlamštainis",
                "Šaltibarščiai",
                "Mėsainis",
                "Uogų faršas",
                "Kebabas"
            ],
            paymentStatus: 1,
            address: "80 Judy Court",
            email: "pwiggett10@sbwire.com",
            phone: "966-196-3847"
        },
        {
            client: "ocanadas11",
            date: "3/5/2019",
            price: 79.36,
            paymentType: 0,
            id: 69,
            meal: ["Kebabas", "Vištienos ėdalas", "Submarinas", "Sriuba"],
            paymentStatus: 1,
            address: "40161 Quincy Lane",
            email: "vcerith11@dropbox.com",
            phone: "783-958-9084"
        },
        {
            client: "aligoe12",
            date: "2/3/2019",
            price: 74.61,
            paymentType: 0,
            id: 10,
            meal: [
                "Kebabas",
                "Gira",
                "Sriuba",
                "Kibinas su braškėmis",
                "Cola",
                "Blynai",
                "Šlamštainis"
            ],
            paymentStatus: 0,
            address: "745 Golf Course Way",
            email: "dmapston12@bbb.org",
            phone: "215-437-0666"
        },
        {
            client: "gashforth13",
            date: "7/25/2019",
            price: 73.12,
            paymentType: 0,
            id: 60,
            meal: ["Uogų faršas", "Pica", "Sriuba"],
            paymentStatus: 0,
            address: "0374 Laurel Hill",
            email: "vmueller13@discuz.net",
            phone: "848-358-0978"
        },
        {
            client: "giori14",
            date: "10/21/2019",
            price: 247.7,
            paymentType: 0,
            id: 91,
            meal: ["Šaltibarščiai", "Blynai"],
            paymentStatus: 0,
            address: "61 Tennessee Alley",
            email: "tgrenville14@columbia.edu",
            phone: "323-458-7768"
        },
        {
            client: "mlucock15",
            date: "9/16/2019",
            price: 104.62,
            paymentType: 1,
            id: 24,
            meal: [
                "Šlamštainis",
                "Kibinas su braškėmis",
                "Sriuba",
                "Uogų faršas"
            ],
            paymentStatus: 1,
            address: "2122 Carey Plaza",
            email: "sjaume15@artisteer.com",
            phone: "457-689-5475"
        },
        {
            client: "ldumigan16",
            date: "1/20/2019",
            price: 121.35,
            paymentType: 1,
            id: 64,
            meal: [
                "Submarinas",
                "Uogų faršas",
                "Kibinas su braškėmis",
                "Cola",
                "Mėsainis"
            ],
            paymentStatus: 1,
            address: "1 Manley Trail",
            email: "jloos16@theglobeandmail.com",
            phone: "526-974-4936"
        },
        {
            client: "areuben17",
            date: "12/27/2018",
            price: 229.18,
            paymentType: 0,
            id: 68,
            meal: [
                "Submarinas",
                "Vištienos ėdalas",
                "Kibinas su braškėmis",
                "Šaltibarščiai"
            ],
            paymentStatus: 0,
            address: "2585 Eastlawn Hill",
            email: "namerighi17@goo.ne.jp",
            phone: "228-305-1682"
        },
        {
            client: "sahearne18",
            date: "11/28/2018",
            price: 156.27,
            paymentType: 1,
            id: 35,
            meal: ["Sriuba", "Pica", "Vištienos ėdalas", "Šaltibarščiai"],
            paymentStatus: 1,
            address: "43340 Rowland Circle",
            email: "kgoodings18@mayoclinic.com",
            phone: "552-788-0456"
        },
        {
            client: "mregenhardt19",
            date: "12/5/2018",
            price: 82.35,
            paymentType: 0,
            id: 79,
            meal: ["Šlamštainis", "Pica"],
            paymentStatus: 0,
            address: "4 Lighthouse Bay Court",
            email: "candrioletti19@google.pl",
            phone: "836-431-7221"
        },
        {
            client: "ajendrassik1a",
            date: "5/29/2019",
            price: 144.67,
            paymentType: 1,
            id: 7,
            meal: ["Šaltibarščiai", "Šlamštainis", "Pica", "Cola"],
            paymentStatus: 0,
            address: "67040 Truax Street",
            email: "rlaviss1a@examiner.com",
            phone: "129-398-1008"
        },
        {
            client: "bscholl1b",
            date: "10/18/2019",
            price: 31.58,
            paymentType: 0,
            id: 15,
            meal: ["Vištienos ėdalas", "Šaltibarščiai", "Sriuba"],
            paymentStatus: 1,
            address: "92408 Loftsgordon Road",
            email: "whardistry1b@blogspot.com",
            phone: "953-552-1252"
        },
        {
            client: "gcutmare1c",
            date: "10/6/2019",
            price: 164.09,
            paymentType: 0,
            id: 64,
            meal: ["Šaltibarščiai", "Kibinas su braškėmis", "Mėsainis", "Cola"],
            paymentStatus: 0,
            address: "713 Swallow Trail",
            email: "wyakovitch1c@psu.edu",
            phone: "220-523-3085"
        },
        {
            client: "vdedomenico1d",
            date: "6/4/2019",
            price: 110.59,
            paymentType: 0,
            id: 47,
            meal: ["Mėsainis", "Kebabas", "Sriuba", "Pica", "Šlamštainis"],
            paymentStatus: 0,
            address: "13 Bartelt Street",
            email: "egayden1d@google.co.jp",
            phone: "465-546-9310"
        },
        {
            client: "cacors1e",
            date: "12/9/2018",
            price: 52.08,
            paymentType: 0,
            id: 28,
            meal: [
                "Vištienos ėdalas",
                "Kibinas su braškėmis",
                "Blynai",
                "Submarinas"
            ],
            paymentStatus: 1,
            address: "025 Colorado Pass",
            email: "jhanster1e@dedecms.com",
            phone: "248-505-8827"
        },
        {
            client: "gbartolomeo1f",
            date: "10/15/2019",
            price: 98.59,
            paymentType: 1,
            id: 5,
            meal: [
                "Šlamštainis",
                "Kibinas su braškėmis",
                "Mėsainis",
                "Blynai",
                "Vištienos ėdalas"
            ],
            paymentStatus: 0,
            address: "61996 Morrow Trail",
            email: "dmccurtain1f@paginegialle.it",
            phone: "436-705-1558"
        },
        {
            client: "nwhilde1g",
            date: "10/28/2019",
            price: 25.3,
            paymentType: 1,
            id: 64,
            meal: ["Blynai", "Šlamštainis", "Sriuba"],
            paymentStatus: 0,
            address: "6176 Farwell Parkway",
            email: "rbessent1g@multiply.com",
            phone: "819-896-1077"
        },
        {
            client: "mwilprecht1h",
            date: "11/26/2018",
            price: 244.59,
            paymentType: 0,
            id: 48,
            meal: ["Gira", "Blynai", "Šaltibarščiai"],
            paymentStatus: 1,
            address: "5571 Dapin Hill",
            email: "nwaterstone1h@wsj.com",
            phone: "927-197-7421"
        },
        {
            client: "mglendzer1i",
            date: "11/8/2019",
            price: 249.77,
            paymentType: 0,
            id: 82,
            meal: [
                "Sriuba",
                "Kebabas",
                "Kibinas su braškėmis",
                "Vištienos ėdalas"
            ],
            paymentStatus: 1,
            address: "5328 Comanche Way",
            email: "sbriddock1i@digg.com",
            phone: "512-989-4918"
        },
        {
            client: "lhuckfield1j",
            date: "5/20/2019",
            price: 113.65,
            paymentType: 1,
            id: 93,
            meal: [
                "Gira",
                "Kibinas su braškėmis",
                "Šaltibarščiai",
                "Pica",
                "Mėsainis",
                "Cola"
            ],
            paymentStatus: 0,
            address: "92 Donald Lane",
            email: "cpavy1j@issuu.com",
            phone: "477-105-2962"
        },
        {
            client: "ringilson1k",
            date: "2/27/2019",
            price: 145.37,
            paymentType: 1,
            id: 94,
            meal: ["Sriuba", "Submarinas", "Gira", "Šaltibarščiai"],
            paymentStatus: 1,
            address: "9165 Fallview Alley",
            email: "fdebrick1k@g.co",
            phone: "623-837-9130"
        },
        {
            client: "alevis1l",
            date: "1/28/2019",
            price: 102.21,
            paymentType: 1,
            id: 33,
            meal: [
                "Vištienos ėdalas",
                "Šlamštainis",
                "Mėsainis",
                "Šaltibarščiai",
                "Kibinas su braškėmis",
                "Cola"
            ],
            paymentStatus: 0,
            address: "015 Michigan Parkway",
            email: "ktawn1l@omniture.com",
            phone: "171-559-3797"
        },
        {
            client: "scauson1m",
            date: "1/3/2019",
            price: 185.62,
            paymentType: 1,
            id: 42,
            meal: ["Mėsainis", "Kebabas", "Submarinas", "Uogų faršas"],
            paymentStatus: 0,
            address: "94 Mayer Alley",
            email: "alongstaff1m@ovh.net",
            phone: "180-173-9369"
        },
        {
            client: "bsee1n",
            date: "5/21/2019",
            price: 160.7,
            paymentType: 0,
            id: 84,
            meal: ["Vištienos ėdalas", "Uogų faršas", "Šlamštainis"],
            paymentStatus: 1,
            address: "0907 Harper Point",
            email: "aclissold1n@yolasite.com",
            phone: "325-240-6778"
        },
        {
            client: "gruffell1o",
            date: "8/5/2019",
            price: 140.87,
            paymentType: 0,
            id: 69,
            meal: [
                "Uogų faršas",
                "Vištienos ėdalas",
                "Mėsainis",
                "Cola",
                "Šaltibarščiai",
                "Gira"
            ],
            paymentStatus: 1,
            address: "68 Roxbury Drive",
            email: "ccosyns1o@patch.com",
            phone: "278-356-4287"
        },
        {
            client: "gollander1p",
            date: "10/8/2019",
            price: 141.65,
            paymentType: 0,
            id: 89,
            meal: ["Gira", "Šlamštainis"],
            paymentStatus: 1,
            address: "2848 Monument Park",
            email: "akamienski1p@about.com",
            phone: "198-701-5485"
        },
        {
            client: "bburstow1q",
            date: "10/12/2019",
            price: 179.86,
            paymentType: 0,
            id: 5,
            meal: [
                "Kebabas",
                "Šaltibarščiai",
                "Mėsainis",
                "Blynai",
                "Pica",
                "Uogų faršas",
                "Sriuba"
            ],
            paymentStatus: 0,
            address: "639 Anhalt Parkway",
            email: "rbransdon1q@washington.edu",
            phone: "450-731-4581"
        },
        {
            client: "nsanter1r",
            date: "8/30/2019",
            price: 150.5,
            paymentType: 1,
            id: 85,
            meal: [
                "Blynai",
                "Sriuba",
                "Cola",
                "Vištienos ėdalas",
                "Kebabas",
                "Pica"
            ],
            paymentStatus: 0,
            address: "564 Hallows Point",
            email: "kyoule1r@free.fr",
            phone: "591-128-7439"
        },
        {
            client: "erubenfeld1s",
            date: "8/8/2019",
            price: 151.73,
            paymentType: 1,
            id: 96,
            meal: ["Uogų faršas", "Pica", "Cola"],
            paymentStatus: 0,
            address: "58818 Brown Junction",
            email: "pjedrzaszkiewicz1s@va.gov",
            phone: "530-714-5470"
        },
        {
            client: "dkyllford1t",
            date: "6/25/2019",
            price: 20.66,
            paymentType: 1,
            id: 38,
            meal: [
                "Šlamštainis",
                "Vištienos ėdalas",
                "Sriuba",
                "Šaltibarščiai",
                "Kebabas",
                "Mėsainis",
                "Uogų faršas"
            ],
            paymentStatus: 1,
            address: "8706 Marcy Avenue",
            email: "amclugaish1t@java.com",
            phone: "117-327-0494"
        },
        {
            client: "wyankin1u",
            date: "1/27/2019",
            price: 69.66,
            paymentType: 0,
            id: 17,
            meal: [
                "Šlamštainis",
                "Gira",
                "Uogų faršas",
                "Pica",
                "Kibinas su braškėmis",
                "Kebabas"
            ],
            paymentStatus: 1,
            address: "699 Rowland Place",
            email: "kbut1u@pen.io",
            phone: "684-303-5535"
        },
        {
            client: "lcale1v",
            date: "11/29/2018",
            price: 167.87,
            paymentType: 1,
            id: 63,
            meal: [
                "Cola",
                "Gira",
                "Kibinas su braškėmis",
                "Uogų faršas",
                "Submarinas",
                "Šaltibarščiai"
            ],
            paymentStatus: 0,
            address: "7493 Stone Corner Terrace",
            email: "rclancey1v@dailymotion.com",
            phone: "855-183-0162"
        },
        {
            client: "adartnell1w",
            date: "3/7/2019",
            price: 198.51,
            paymentType: 1,
            id: 4,
            meal: ["Submarinas", "Sriuba"],
            paymentStatus: 1,
            address: "89 West Street",
            email: "escowen1w@yahoo.co.jp",
            phone: "822-755-4287"
        },
        {
            client: "thussey1x",
            date: "7/17/2019",
            price: 246.3,
            paymentType: 1,
            id: 45,
            meal: ["Vištienos ėdalas", "Gira", "Sriuba"],
            paymentStatus: 1,
            address: "610 Express Drive",
            email: "kfurtado1x@icq.com",
            phone: "728-585-4279"
        },
        {
            client: "mconyer1y",
            date: "5/15/2019",
            price: 223.93,
            paymentType: 0,
            id: 99,
            meal: ["Sriuba", "Blynai", "Šlamštainis", "Submarinas"],
            paymentStatus: 1,
            address: "398 Hollow Ridge Parkway",
            email: "mgiampietro1y@cisco.com",
            phone: "396-495-7111"
        },
        {
            client: "tkirdsch1z",
            date: "9/8/2019",
            price: 169.82,
            paymentType: 1,
            id: 74,
            meal: [
                "Vištienos ėdalas",
                "Submarinas",
                "Kebabas",
                "Gira",
                "Blynai"
            ],
            paymentStatus: 0,
            address: "97 Debs Point",
            email: "aderl1z@imgur.com",
            phone: "365-993-8484"
        },
        {
            client: "nmunt20",
            date: "6/10/2019",
            price: 31.67,
            paymentType: 0,
            id: 90,
            meal: ["Uogų faršas", "Sriuba", "Kibinas su braškėmis"],
            paymentStatus: 0,
            address: "71 Bultman Street",
            email: "mparham20@google.com.au",
            phone: "669-258-9326"
        },
        {
            client: "dtutin21",
            date: "9/25/2019",
            price: 98.23,
            paymentType: 1,
            id: 17,
            meal: [
                "Šaltibarščiai",
                "Mėsainis",
                "Vištienos ėdalas",
                "Pica",
                "Submarinas",
                "Cola"
            ],
            paymentStatus: 1,
            address: "921 Fair Oaks Park",
            email: "mcockrill21@icq.com",
            phone: "701-770-7912"
        },
        {
            client: "amitie22",
            date: "7/15/2019",
            price: 103.89,
            paymentType: 1,
            id: 71,
            meal: ["Gira", "Uogų faršas", "Cola", "Vištienos ėdalas", "Blynai"],
            paymentStatus: 1,
            address: "49833 Monica Street",
            email: "ccorradini22@aboutads.info",
            phone: "633-423-1954"
        },
        {
            client: "bbonnick23",
            date: "6/16/2019",
            price: 39.58,
            paymentType: 1,
            id: 89,
            meal: [
                "Sriuba",
                "Gira",
                "Cola",
                "Kibinas su braškėmis",
                "Submarinas",
                "Šaltibarščiai",
                "Šlamštainis"
            ],
            paymentStatus: 1,
            address: "89954 Golf Course Park",
            email: "eprawle23@cnn.com",
            phone: "406-749-9110"
        },
        {
            client: "rflintoff24",
            date: "8/21/2019",
            price: 187.73,
            paymentType: 1,
            id: 18,
            meal: [
                "Kibinas su braškėmis",
                "Vištienos ėdalas",
                "Šaltibarščiai",
                "Mėsainis"
            ],
            paymentStatus: 0,
            address: "3 Sherman Center",
            email: "vpiccard24@about.me",
            phone: "219-768-2005"
        },
        {
            client: "thunstone25",
            date: "5/25/2019",
            price: 154.17,
            paymentType: 1,
            id: 41,
            meal: [
                "Kibinas su braškėmis",
                "Kebabas",
                "Vištienos ėdalas",
                "Cola",
                "Uogų faršas",
                "Gira",
                "Blynai"
            ],
            paymentStatus: 1,
            address: "40 Corscot Court",
            email: "cfinnie25@infoseek.co.jp",
            phone: "460-868-9856"
        },
        {
            client: "ureddihough26",
            date: "2/6/2019",
            price: 91.62,
            paymentType: 0,
            id: 35,
            meal: ["Vištienos ėdalas", "Kebabas"],
            paymentStatus: 1,
            address: "90 Kennedy Lane",
            email: "eremmer26@spiegel.de",
            phone: "185-327-6112"
        },
        {
            client: "vmcruvie27",
            date: "10/11/2019",
            price: 93.84,
            paymentType: 1,
            id: 34,
            meal: [
                "Pica",
                "Vištienos ėdalas",
                "Kebabas",
                "Submarinas",
                "Mėsainis",
                "Šlamštainis",
                "Blynai"
            ],
            paymentStatus: 1,
            address: "55397 Glacier Hill Point",
            email: "lketton27@usa.gov",
            phone: "237-585-9324"
        },
        {
            client: "bstratton28",
            date: "12/9/2018",
            price: 167.75,
            paymentType: 0,
            id: 72,
            meal: [
                "Submarinas",
                "Gira",
                "Šlamštainis",
                "Mėsainis",
                "Vištienos ėdalas"
            ],
            paymentStatus: 1,
            address: "1 Menomonie Court",
            email: "lclemendet28@github.io",
            phone: "646-101-9942"
        },
        {
            client: "sdemeyer29",
            date: "12/13/2018",
            price: 141.8,
            paymentType: 1,
            id: 36,
            meal: ["Sriuba", "Kebabas", "Blynai", "Mėsainis"],
            paymentStatus: 1,
            address: "93300 Hoepker Terrace",
            email: "sfitchett29@networksolutions.com",
            phone: "270-285-4197"
        },
        {
            client: "acampa2a",
            date: "11/26/2018",
            price: 59.95,
            paymentType: 1,
            id: 88,
            meal: [
                "Mėsainis",
                "Sriuba",
                "Kibinas su braškėmis",
                "Pica",
                "Submarinas",
                "Cola"
            ],
            paymentStatus: 0,
            address: "607 Northport Hill",
            email: "apatnelli2a@msn.com",
            phone: "504-165-9570"
        },
        {
            client: "aimms2b",
            date: "3/26/2019",
            price: 123.54,
            paymentType: 1,
            id: 55,
            meal: ["Šaltibarščiai", "Blynai"],
            paymentStatus: 1,
            address: "24 Artisan Pass",
            email: "aboddam2b@mediafire.com",
            phone: "904-119-9552"
        },
        {
            client: "rscorthorne2c",
            date: "4/30/2019",
            price: 148.69,
            paymentType: 1,
            id: 51,
            meal: ["Šlamštainis", "Sriuba", "Kebabas", "Mėsainis"],
            paymentStatus: 0,
            address: "9465 Toban Lane",
            email: "wgrunson2c@cnbc.com",
            phone: "337-411-1083"
        },
        {
            client: "lrosenfield2d",
            date: "12/22/2018",
            price: 197.27,
            paymentType: 1,
            id: 54,
            meal: ["Uogų faršas", "Kebabas", "Sriuba", "Šlamštainis"],
            paymentStatus: 0,
            address: "4 Farragut Park",
            email: "swurz2d@washington.edu",
            phone: "853-438-8795"
        },
        {
            client: "sishchenko2e",
            date: "2/9/2019",
            price: 161.27,
            paymentType: 1,
            id: 63,
            meal: [
                "Blynai",
                "Šaltibarščiai",
                "Pica",
                "Mėsainis",
                "Vištienos ėdalas",
                "Kebabas",
                "Submarinas"
            ],
            paymentStatus: 0,
            address: "62063 Columbus Park",
            email: "cjon2e@hostgator.com",
            phone: "315-625-6331"
        },
        {
            client: "hfolkerts2f",
            date: "10/29/2019",
            price: 43.05,
            paymentType: 1,
            id: 95,
            meal: ["Mėsainis", "Vištienos ėdalas", "Šlamštainis"],
            paymentStatus: 1,
            address: "1018 Susan Avenue",
            email: "nmoye2f@dmoz.org",
            phone: "506-797-1778"
        },
        {
            client: "lludwikiewicz2g",
            date: "5/15/2019",
            price: 84.21,
            paymentType: 1,
            id: 9,
            meal: [
                "Šaltibarščiai",
                "Kibinas su braškėmis",
                "Uogų faršas",
                "Mėsainis",
                "Šlamštainis",
                "Kebabas"
            ],
            paymentStatus: 1,
            address: "94 Sullivan Parkway",
            email: "whelks2g@elpais.com",
            phone: "782-144-3678"
        },
        {
            client: "gclough2h",
            date: "3/23/2019",
            price: 47.17,
            paymentType: 1,
            id: 42,
            meal: ["Šlamštainis", "Gira", "Mėsainis"],
            paymentStatus: 1,
            address: "8 Scoville Circle",
            email: "eerickssen2h@cornell.edu",
            phone: "804-974-8689"
        },
        {
            client: "fmorena2i",
            date: "5/2/2019",
            price: 50.45,
            paymentType: 1,
            id: 94,
            meal: [
                "Blynai",
                "Cola",
                "Šlamštainis",
                "Kibinas su braškėmis",
                "Submarinas"
            ],
            paymentStatus: 1,
            address: "4069 Magdeline Way",
            email: "agamble2i@oracle.com",
            phone: "894-996-7921"
        },
        {
            client: "rkinsella2j",
            date: "10/26/2019",
            price: 52.97,
            paymentType: 0,
            id: 95,
            meal: [
                "Šlamštainis",
                "Submarinas",
                "Cola",
                "Vištienos ėdalas",
                "Šaltibarščiai",
                "Mėsainis",
                "Kibinas su braškėmis"
            ],
            paymentStatus: 1,
            address: "6 Scoville Avenue",
            email: "pfrisch2j@washington.edu",
            phone: "877-359-4202"
        },
        {
            client: "reverleigh2k",
            date: "12/16/2018",
            price: 117.87,
            paymentType: 1,
            id: 32,
            meal: ["Kibinas su braškėmis", "Šaltibarščiai", "Cola"],
            paymentStatus: 1,
            address: "6 Waywood Place",
            email: "kfroment2k@pbs.org",
            phone: "237-853-3657"
        },
        {
            client: "dfishley2l",
            date: "2/22/2019",
            price: 235.72,
            paymentType: 0,
            id: 30,
            meal: ["Cola", "Blynai", "Submarinas"],
            paymentStatus: 0,
            address: "25338 Lake View Street",
            email: "volensby2l@deviantart.com",
            phone: "116-229-0418"
        },
        {
            client: "dcrudginton2m",
            date: "4/6/2019",
            price: 228.37,
            paymentType: 1,
            id: 55,
            meal: ["Uogų faršas", "Cola", "Submarinas", "Gira"],
            paymentStatus: 0,
            address: "74 Golden Leaf Center",
            email: "scotta2m@webnode.com",
            phone: "559-840-6996"
        },
        {
            client: "jcolliver2n",
            date: "1/7/2019",
            price: 223.66,
            paymentType: 1,
            id: 7,
            meal: ["Submarinas", "Šaltibarščiai", "Vištienos ėdalas"],
            paymentStatus: 1,
            address: "056 Rusk Junction",
            email: "rburgoyne2n@tuttocitta.it",
            phone: "331-841-4991"
        },
        {
            client: "tbethune2o",
            date: "9/24/2019",
            price: 116.56,
            paymentType: 1,
            id: 11,
            meal: ["Mėsainis", "Vištienos ėdalas", "Blynai"],
            paymentStatus: 1,
            address: "99230 Cherokee Court",
            email: "apaybody2o@purevolume.com",
            phone: "319-627-7680"
        },
        {
            client: "erizzillo2p",
            date: "12/3/2018",
            price: 99.26,
            paymentType: 0,
            id: 59,
            meal: ["Šlamštainis", "Kebabas", "Blynai", "Gira"],
            paymentStatus: 1,
            address: "0 Brickson Park Way",
            email: "bdunstall2p@nymag.com",
            phone: "916-366-6750"
        },
        {
            client: "wbeggs2q",
            date: "10/18/2019",
            price: 26.23,
            paymentType: 1,
            id: 92,
            meal: [
                "Pica",
                "Mėsainis",
                "Blynai",
                "Uogų faršas",
                "Šlamštainis",
                "Kebabas",
                "Submarinas"
            ],
            paymentStatus: 1,
            address: "00532 Columbus Court",
            email: "abazylets2q@com.com",
            phone: "710-773-6616"
        },
        {
            client: "lgaineofengland2r",
            date: "7/31/2019",
            price: 79.27,
            paymentType: 1,
            id: 33,
            meal: ["Cola", "Vištienos ėdalas", "Blynai", "Šaltibarščiai"],
            paymentStatus: 0,
            address: "952 Gale Street",
            email: "jwallen2r@slashdot.org",
            phone: "361-475-1720"
        }
    ]
};
