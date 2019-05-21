const {ViajaNet, Milhas, PassagensPromo, Voopter} = require('./puppeteer')
const fs = require('fs');

// Departure and Return date
const dataIda = ["05", "07", "2019"];
const dataVolta = ["07", "08", "2019"];

// Origin and Destination places
const origem = "BHZ";
const destino = "VIX";

// Defines the search interval in minutes
const searchInterval = 1; 

// Makes the web scrapping during the defined interval
setInterval(() => {

    ViajaNet(dataIda, dataVolta, origem, destino).then((value) => {
        console.log(value);
        fs.appendFile("src/data/Viajanet-data.json", JSON.stringify(value), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("-> Viajanet price was saved! \n");
        }); 
    });

    Milhas(dataIda, dataVolta, origem, destino).then((value) => {
        console.log(value);
        fs.appendFile("src/data/123Milhas-data.json", JSON.stringify(value), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("-> 123Milhas price was saved! \n");
        }); 
    });

    PassagensPromo(dataIda, dataVolta, origem, destino).then((value) => {
        console.log(value);
        fs.appendFile("src/data/PassagensPromo-data.json", JSON.stringify(value), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("-> PassagensPromo price was saved! \n");
        }); 
    });

    Voopter(dataIda, dataVolta, origem, destino).then((value) => {
        console.log(value);
        fs.appendFile("src/data/Voopter-data.json", JSON.stringify(value), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("-> Voopter price was saved! \n");
        }); 
    }); 

}, 60000*searchInterval);