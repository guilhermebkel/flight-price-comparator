const puppeteer = require('puppeteer-core');

/*
(async() => {
   const browser = await puppeteer.launch({executablePath: 'chromium-browser'}); // <- set path for chromium browser
   const page = await browser.newPage();
   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36');
   await page.setViewport({width:960,height:768});
   await page.goto('https://google.com/', {timeout: 40000, waitUntil: 'domcontentloaded'});
   await page.screenshot({ fullPage: true, path: 'screenshot.jpg' });
   await browser.close();
   //await page.click('#vn-content--result > div > div.results > ul:nth-child(1) > vn-full-recommendation > div > div > vn-recommendation-air > li > div.sticky_price.ng-scope > h3 > span:nth-child(2)');
})();
*/

const ViajaNet = async (dataIda, dataVolta, origem, destino) => {      
        const browser = await puppeteer.launch({executablePath: 'chromium-browser'});

        const page = await browser.newPage();
        
        await page.goto(`https://www.viajanet.com.br/busca/passagens/voos#/${origem}/${destino}/RT/${dataIda[0]}-${dataIda[1]}-${dataIda[2]}/${dataVolta[0]}-${dataVolta[1]}-${dataVolta[2]}/-/-/-/1/0/0/-/-/-/-`, {timeout: 1000000});
        await page.waitForSelector('#vn-content--result > div > div.results > ul:nth-child(1) > vn-full-recommendation > div > div > vn-recommendation-air > li > div.sticky_price.ng-scope > h3', {timeout: 1000000});
        
        const price = await page.evaluate(() => {
            let price = document.querySelector('#vn-content--result > div > div.results > ul:nth-child(1) > vn-full-recommendation > div > div > vn-recommendation-air > li > div.sticky_price.ng-scope > h3').innerText;
            price = price.replace('R$', '');
            price = price.replace(/\s+/g, ' ').trim();
            price = parseFloat(price);
            return price;   
        });

        browser.close();
        return {
            Site: "Viajanet",
            DepartureDate: `${dataIda[0]}/${dataIda[1]}/${dataIda[2]}`,
            ReturnDate: `${dataVolta[0]}/${dataVolta[1]}/${dataVolta[2]}`,
            Origin: origem,
            Destination: destino,
            Price: price, 
            Url: `https://www.viajanet.com.br/busca/passagens/voos#/${origem}/${destino}/RT/${dataIda[0]}-${dataIda[1]}-${dataIda[2]}/${dataVolta[0]}-${dataVolta[1]}-${dataVolta[2]}/-/-/-/1/0/0/-/-/-/-`,
            LastUpdate: `${new Date()}`      
        };
};

const Milhas = async (dataIda, dataVolta, origem, destino) => {
        const browser = await puppeteer.launch({executablePath: 'chromium-browser'});
        
        const page = await browser.newPage();
        
        await page.goto(`https://123milhas.com/v2/busca?de=${origem}&para=${destino}&ida=${dataIda[0]}-${dataIda[1]}-${dataIda[2]}&volta=${dataVolta[0]}-${dataVolta[1]}-${dataVolta[2]}&adultos=1&criancas=0&search_id=164021478`, {timeout: 1000000});
        await page.waitForSelector('#frmGroup0 > div.row.group-flights > div.new-cart.ng-animate-disabled.has-earn > div.price > div.group-price > div > div', {timeout: 1000000});

        const price = await page.evaluate(() => {
            let price = document.querySelector('#frmGroup0 > div.row.group-flights > div.new-cart.ng-animate-disabled.has-earn > div.price > div.group-price > div > div').innerText;
            price = price.replace('R$', '');
            price = price.replace(/\s+/g, ' ').trim();
            price = parseFloat(price);
            return price     
        });

        browser.close();
        return {
            Site: "123 Milhas",
            DepartureDate: `${dataIda[0]}/${dataIda[1]}/${dataIda[2]}`,
            ReturnDate: `${dataVolta[0]}/${dataVolta[1]}/${dataVolta[2]}`,
            Origin: origem,
            Destination: destino,
            Price: price,  
            Url: `https://123milhas.com/v2/busca?de=${origem}&para=${destino}&ida=${dataIda[0]}-${dataIda[1]}-${dataIda[2]}&volta=${dataVolta[0]}-${dataVolta[1]}-${dataVolta[2]}&adultos=1&criancas=0&search_id=164021478`,
            LastUpdate: `${new Date()}`
        };
};

const PassagensPromo = async (dataIda, dataVolta, origem, destino) => {
        const browser = await puppeteer.launch({executablePath: 'chromium-browser'});
        
        const page = await browser.newPage();
        
        await page.goto(`https://www.passagenspromo.com.br/site/aereo/pesquisa/${origem}/${destino}/${dataIda[0]}-${dataIda[1]}-${dataIda[2]}/${dataVolta[0]}-${dataVolta[1]}-${dataVolta[2]}/1/0/0`, {timeout: 1000000});
        await page.waitFor('#search-body > div.row-fluid.search-contents > div > div.col-md-9.col-sm-12.search-results.fix-search-contents > div.col-md-12.col-sm-12.col-xs-12 > div:nth-child(5) > div.col-md-3.col-price.text-center.clearfix.hidden-sm.hidden-xs > div > ul > li.clearfix.final-price > span.pull-right > span', {timeout: 1000000});

        const price = await page.evaluate(() => {
            let price = document.querySelector('#search-body > div.row-fluid.search-contents > div > div.col-md-9.col-sm-12.search-results.fix-search-contents > div.col-md-12.col-sm-12.col-xs-12 > div:nth-child(5) > div.col-md-3.col-price.text-center.clearfix.hidden-sm.hidden-xs > div > ul > li.clearfix.final-price > span.pull-right > span').innerText;
            price = price.replace('R$', '');
            price = price.replace(/\s+/g, ' ').trim();
            price = parseFloat(price);
            return price   
        });

        browser.close();
        return {
            Site: "Passagens Promo",
            DepartureDate: `${dataIda[0]}/${dataIda[1]}/${dataIda[2]}`,
            ReturnDate: `${dataVolta[0]}/${dataVolta[1]}/${dataVolta[2]}`,
            Origin: origem,
            Destination: destino,
            Price: price,   
            Url: `https://www.passagenspromo.com.br/site/aereo/pesquisa/${origem}/${destino}/${dataIda[0]}-${dataIda[1]}-${dataIda[2]}/${dataVolta[0]}-${dataVolta[1]}-${dataVolta[2]}/1/0/0`,
            LastUpdate: `${new Date()}`
        };
};

const Voopter = async (dataIda, dataVolta, origem, destino) => {
        const browser = await puppeteer.launch({executablePath: 'chromium-browser'});
         
        const page = await browser.newPage();
        
        await page.goto(`https://voopter.com.br/passagens-aereas-de-belo-horizonte/${origem}/para-vitoria/${destino}#dl%5B%5D=${dataIda[2]}${dataIda[1]}${dataIda[0]}&dr%5B%5D=${dataVolta[2]}${dataVolta[1]}${dataVolta[0]}&na=1&nc=0&ni=0&sn=true&pop=true`, {timeout: 1000000});
        await page.waitForSelector('#container-results > div.col-sm-12.col-md-9.col-lg-7 > div:nth-child(1) > ul > li.result > div > div.price > p', {timeout: 1000000});

        const price = await page.evaluate(() => {
            let price = document.querySelector('#container-results > div.col-sm-12.col-md-9.col-lg-7 > div:nth-child(1) > ul > li.result > div > div.price > p').innerText;
            price = price.replace('R$', '');
            price = price.replace(/\s+/g, ' ').trim();
            price = parseFloat(price);
            return price
        });

        browser.close();
        return {
            Site: "Voopter",
            DepartureDate: `${dataIda[0]}/${dataIda[1]}/${dataIda[2]}`,
            ReturnDate: `${dataVolta[0]}/${dataVolta[1]}/${dataVolta[2]}`,
            Origin: origem,
            Destination: destino,
            Price: price,   
            Url: `https://voopter.com.br/passagens-aereas-de-belo-horizonte/${origem}/para-vitoria/${destino}#dl%5B%5D=${dataIda[2]}${dataIda[1]}${dataIda[0]}&dr%5B%5D=${dataVolta[2]}${dataVolta[1]}${dataVolta[0]}&na=1&nc=0&ni=0&sn=true&pop=true`,
            LastUpdate: `${new Date()}`
        };
};
  
module.exports = {
    ViajaNet: ViajaNet,
    Milhas: Milhas,
    PassagensPromo: PassagensPromo,
    Voopter: Voopter
}