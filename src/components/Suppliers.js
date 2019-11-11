import React from "react";
import Table from "./Table";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Suppliers() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Table
                title='Tiekėjai'
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
        { title: "Pavadinimas", field: "name" },
        { title: "Adresas", field: "address"},
        { title: "El. pašto adresas", field: "email"},
        { title: "Tel. nr.", field: "phone"},
        { title: "Šalis", field: "country"}
    ],
    data: [{
        "name": "Realcube",
        "email": "jswithenby0@earthlink.net",
        "address": "092 Golf View Street",
        "country": "Cuba",
        "phone": "107-951-9976"
      }, {
        "name": "Skinte",
        "email": "aforce1@indiegogo.com",
        "address": "7 Commercial Point",
        "country": "Japan",
        "phone": "482-575-5774"
      }, {
        "name": "Dynava",
        "email": "sayerst2@hubpages.com",
        "address": "386 Clyde Gallagher Pass",
        "country": "Indonesia",
        "phone": "208-423-8168"
      }, {
        "name": "Photolist",
        "email": "mlequesne3@walmart.com",
        "address": "2123 Alpine Avenue",
        "country": "Portugal",
        "phone": "734-847-0534"
      }, {
        "name": "Agimba",
        "email": "dtolworth4@slate.com",
        "address": "94264 Cascade Place",
        "country": "Venezuela",
        "phone": "138-997-8831"
      }, {
        "name": "Flipopia",
        "email": "dbrunger5@livejournal.com",
        "address": "10 Shasta Center",
        "country": "China",
        "phone": "291-507-9069"
      }, {
        "name": "Meetz",
        "email": "msweatman6@disqus.com",
        "address": "3 Fieldstone Avenue",
        "country": "China",
        "phone": "313-327-7642"
      }, {
        "name": "Twitterworks",
        "email": "rheathwood7@phoca.cz",
        "address": "70151 Jay Parkway",
        "country": "France",
        "phone": "443-853-4048"
      }, {
        "name": "Edgeblab",
        "email": "kstubley8@jalbum.net",
        "address": "503 Manufacturers Place",
        "country": "Indonesia",
        "phone": "321-524-8506"
      }, {
        "name": "Ailane",
        "email": "froyal9@fema.gov",
        "address": "47 Paget Pass",
        "country": "China",
        "phone": "739-995-6709"
      }, {
        "name": "Skidoo",
        "email": "sterrellya@yale.edu",
        "address": "8645 Utah Park",
        "country": "Lithuania",
        "phone": "324-807-7075"
      }, {
        "name": "Voonyx",
        "email": "sstowersb@dailymotion.com",
        "address": "0229 Bunting Trail",
        "country": "China",
        "phone": "689-279-7136"
      }, {
        "name": "Twinder",
        "email": "avolkerc@technorati.com",
        "address": "509 Ryan Circle",
        "country": "Russia",
        "phone": "511-189-9553"
      }, {
        "name": "Blogtag",
        "email": "ngilderd@usa.gov",
        "address": "3550 Bowman Lane",
        "country": "Japan",
        "phone": "104-360-8700"
      }, {
        "name": "Twitternation",
        "email": "brosenboime@imgur.com",
        "address": "3 Sheridan Crossing",
        "country": "China",
        "phone": "525-201-7255"
      }, {
        "name": "Browsebug",
        "email": "lmcgillicuddyf@networksolutions.com",
        "address": "94 Anhalt Lane",
        "country": "Guatemala",
        "phone": "695-178-2538"
      }, {
        "name": "Vinder",
        "email": "jspenceleyg@squidoo.com",
        "address": "61222 Towne Court",
        "country": "Poland",
        "phone": "265-768-5791"
      }, {
        "name": "Dynabox",
        "email": "rramptonh@alibaba.com",
        "address": "3220 Roxbury Point",
        "country": "Czech Republic",
        "phone": "550-579-2792"
      }, {
        "name": "Tagpad",
        "email": "hlicciardii@vk.com",
        "address": "283 Cody Lane",
        "country": "France",
        "phone": "223-180-6161"
      }, {
        "name": "Buzzshare",
        "email": "wmcilmurrayj@who.int",
        "address": "380 American Plaza",
        "country": "Russia",
        "phone": "736-802-9828"
      }, {
        "name": "Zoomdog",
        "email": "bshaughnessyk@jiathis.com",
        "address": "1 Esch Terrace",
        "country": "Cambodia",
        "phone": "119-888-3670"
      }, {
        "name": "Zoomdog",
        "email": "bilbertl@washingtonpost.com",
        "address": "4 Nobel Plaza",
        "country": "Russia",
        "phone": "383-778-3988"
      }, {
        "name": "LiveZ",
        "email": "lcoulbeckm@hatena.ne.jp",
        "address": "8 Esch Avenue",
        "country": "Philippines",
        "phone": "967-997-6445"
      }, {
        "name": "Cogidoo",
        "email": "akobpan@tinyurl.com",
        "address": "687 Eastwood Drive",
        "country": "Taiwan",
        "phone": "570-468-5261"
      }, {
        "name": "Npath",
        "email": "jmacaskieo@hao123.com",
        "address": "78710 Evergreen Trail",
        "country": "United States",
        "phone": "515-176-1317"
      }, {
        "name": "Pixoboo",
        "email": "isilbersakp@hao123.com",
        "address": "1 Judy Pass",
        "country": "Mexico",
        "phone": "805-349-1810"
      }, {
        "name": "Muxo",
        "email": "tbotleyq@google.ca",
        "address": "449 Katie Drive",
        "country": "Philippines",
        "phone": "249-519-1920"
      }, {
        "name": "Meedoo",
        "email": "tkretchmerr@yahoo.co.jp",
        "address": "41 Bluejay Junction",
        "country": "Indonesia",
        "phone": "147-312-9874"
      }, {
        "name": "Livepath",
        "email": "ddovydenass@nytimes.com",
        "address": "18 Badeau Center",
        "country": "Indonesia",
        "phone": "335-943-6189"
      }, {
        "name": "Jaxnation",
        "email": "ytreslert@scientificamerican.com",
        "address": "109 Daystar Road",
        "country": "United States",
        "phone": "302-943-5335"
      }, {
        "name": "Topiczoom",
        "email": "eclaveyu@bandcamp.com",
        "address": "1194 Mendota Crossing",
        "country": "Zambia",
        "phone": "363-950-0386"
      }, {
        "name": "Fivebridge",
        "email": "fodarev@so-net.ne.jp",
        "address": "1932 Southridge Way",
        "country": "Venezuela",
        "phone": "308-280-0360"
      }, {
        "name": "Skidoo",
        "email": "agamagew@miitbeian.gov.cn",
        "address": "876 Burning Wood Place",
        "country": "Ecuador",
        "phone": "478-131-7202"
      }, {
        "name": "Fiveclub",
        "email": "gwingrovex@deliciousdays.com",
        "address": "93259 Marcy Parkway",
        "country": "Ethiopia",
        "phone": "781-543-3506"
      }, {
        "name": "Twimm",
        "email": "hredferney@topsy.com",
        "address": "238 Vahlen Place",
        "country": "Czech Republic",
        "phone": "528-102-0144"
      }, {
        "name": "Ailane",
        "email": "jdriz@state.tx.us",
        "address": "76 Hollow Ridge Alley",
        "country": "Mexico",
        "phone": "734-421-0896"
      }, {
        "name": "Gevee",
        "email": "pmacellar10@themeforest.net",
        "address": "1 East Junction",
        "country": "Syria",
        "phone": "173-100-1283"
      }, {
        "name": "Zoovu",
        "email": "aprugel11@macromedia.com",
        "address": "3 Sunfield Park",
        "country": "China",
        "phone": "544-166-7419"
      }, {
        "name": "Demivee",
        "email": "ledmett12@discovery.com",
        "address": "402 Oak Valley Circle",
        "country": "Rwanda",
        "phone": "317-377-4629"
      }, {
        "name": "Yakidoo",
        "email": "kvlahos13@qq.com",
        "address": "543 Summerview Place",
        "country": "Somalia",
        "phone": "831-316-8657"
      }, {
        "name": "Photobug",
        "email": "beliez14@scientificamerican.com",
        "address": "149 Hooker Road",
        "country": "Brazil",
        "phone": "620-936-4190"
      }, {
        "name": "Dabshots",
        "email": "ubentham15@dedecms.com",
        "address": "4429 Hanover Court",
        "country": "China",
        "phone": "946-171-5978"
      }, {
        "name": "Tagchat",
        "email": "pgull16@reuters.com",
        "address": "43635 Northridge Parkway",
        "country": "China",
        "phone": "472-227-6307"
      }, {
        "name": "Feedspan",
        "email": "mdebell17@ft.com",
        "address": "898 Tennessee Pass",
        "country": "Russia",
        "phone": "303-116-1972"
      }, {
        "name": "Gabspot",
        "email": "ffutcher18@tumblr.com",
        "address": "1976 Stoughton Trail",
        "country": "Philippines",
        "phone": "417-484-0334"
      }, {
        "name": "Twimm",
        "email": "vwalenta19@sciencedirect.com",
        "address": "554 Lerdahl Street",
        "country": "United States",
        "phone": "406-219-7209"
      }, {
        "name": "Skiba",
        "email": "bmacpaden1a@woothemes.com",
        "address": "11755 Rieder Plaza",
        "country": "Poland",
        "phone": "951-403-0854"
      }, {
        "name": "Ntags",
        "email": "jsandeford1b@blog.com",
        "address": "104 Hanson Lane",
        "country": "Russia",
        "phone": "756-679-3556"
      }, {
        "name": "Realpoint",
        "email": "ddeanesy1c@nps.gov",
        "address": "1831 Northland Way",
        "country": "China",
        "phone": "556-993-6001"
      }, {
        "name": "Kwilith",
        "email": "kminchi1d@ehow.com",
        "address": "60696 Walton Parkway",
        "country": "Dominican Republic",
        "phone": "491-241-3242"
      }]
}