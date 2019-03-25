const {ViajaNet, Milhas, PassagensPromo, Voopter} = require('./puppeteer')
const fs = require('fs');

const dataIda = ["18", "04", "2019"]
const dataVolta = ["21", "04", "2019"]

/* Initializes all functions */

setInterval(function(){

ViajaNet(dataIda, dataVolta).then((value) => {
    console.log(value);
    fs.writeFile("src/data/Viajanet-data.json", JSON.stringify(value), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("-> Viajanet price was saved! \n");
    }); 
});

Milhas(dataIda, dataVolta).then((value) => {
    console.log(value);
    fs.writeFile("src/data/123Milhas-data.json", JSON.stringify(value), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("-> 123Milhas price was saved! \n");
    }); 
});

PassagensPromo(dataIda, dataVolta).then((value) => {
    console.log(value);
    fs.writeFile("src/data/PassagensPromo-data.json", JSON.stringify(value), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("-> PassagensPromo price was saved! \n");
    }); 
});

Voopter(dataIda, dataVolta).then((value) => {
    console.log(value);
    fs.writeFile("src/data/Voopter-data.json", JSON.stringify(value), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("-> Voopter price was saved! \n");
    }); 
}); 

}, 60000); //Updates the price every 60 seconds
   
