const puppeteer = require('puppeteer');
const PAGE_URL = 'https://splinterlands.com'; 
const usernamez = 'acebatibot1@gmail.com';
const passwordz = '@Synesthesia14';
var monster = "";
'use strict';
var pyromancer = "";
var piratecapt = "12";
var crustacean = "14";
var seamonster = "103";
var frostlion = "264";
var waverunner = "232";
var piratearcher = "93";
var nagawindmaster = "134";
var bortus = "178";
var spinbackturtle = "13";
var wavesmith = "338";
var lir = "254";
var mylor = "259";
var woodnymph = "90";
var beatrix = "279";
var mushroom = "85";
var brownie = "95";
var magiofforest = "31";
var spiritshaman = "221";
var owster = "258";
var ooze = "91";
var chick = "131";
var sandworm = "242";
var halfling = "237";
var ariantus = "82";
var grenadier = "276";
var brightoon = "262";


function delay(time) {
	return new Promise(function(resolve) { 
		setTimeout(resolve, time)
	});
 }

 async function waitUntilLoaded(page) {
	try {
        await page.waitForSelector('.price-bcx', { timeout: 6000 })
            .then(() => {
				console.log('Waiting until page is loaded...');
			});
    } catch (e) {
        console.info('No price-bcx circle...')
		return;
    }
	
	await page.waitForFunction(() => !document.querySelector('.price-bcx'), { timeout: 60000 });
}



(async function renter() {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		args: ['--enable-gpu','--disable-extensions','--start-maximized']}); 
	const page = await browser.newPage();
		await page.setCacheEnabled(false);
		await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
		await page.goto(PAGE_URL);
		await page.click('.new-button');
		await page.waitForTimeout(2000);
		await page.waitForSelector('#email');
		await page.focus('#email');
		await page.type('#email', usernamez);
		await page.focus('#password');
		await page.type('#password', passwordz);
		await page.keyboard.press('Enter');
		await page.waitForTimeout(5000);
		await page.click('.close');
		for (var i = 1;;){
			try
			{
				await page.goto('https://splinterlands.com/?p=card_details&id=228&gold=false&edition=3&tab=cards');
				await page.waitForSelector('#active_skin', { timeout: 20000 })
    			const text1 = await page.$eval('html', element => element.textContent)
				//console.log(text1);
    			if(text1.indexOf("C3-") !== -1)
				{
					console.log("monster already rented");
				}
				else
				{
					console.log("attempting to rent");
					await page.goto('https://splinterlands.com/?p=card_details&id=228&gold=false&edition=3&tab=rentals');
					await page.waitForSelector('.price-bcx', { timeout: 20000 })
					await page.select('#market_sort', 'price');
					await page.waitForTimeout(2500);
					console.log('sort done');
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.waitForTimeout(2000);
					console.log('ticking checkbox done');
					await page.click('#btn_buy');
					await page.waitForTimeout(2000);
					await page.$eval('input[type=number]', el => el.value = '1');
					console.log('changed rent days to value of 1')

					page.on('dialog', async dialog => 
					{
						console.log("dialog is up:");
						console.log(dialog.message());
						await dialog.accept();
						console.log("accepted");
					});
					await page.click('#btn_rent_popup_rent');
					await page.waitForSelector('#active_skin', { timeout: 20000 })
    				await page.goto('https://splinterlands.com/?p=card_details&id=228&gold=false&edition=3&tab=cards');
					if(text1.indexOf('C3-') !== -1)
					{
						console.log("monster already rented ");
					}
					else
					{ 
						console.log('renting failed, retrying...')
						await page.waitForTimeout(2000);
					}
				}
////////////////////////////////////////////////2
await page.goto('https://splinterlands.com/?p=card_details&id=12&gold=true&edition=0&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text2 = await page.$eval('html', element => element.textContent)
if(text2.indexOf("G-") !== -1){

console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=12&gold=true&edition=0&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=12&gold=true&edition=0&tab=cards');
if(text2.indexOf('G-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////3
await page.goto('https://splinterlands.com/?p=card_details&id=14&gold=true&edition=0&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text3 = await page.$eval('html', element => element.textContent)
if(text3.indexOf("G-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=14&gold=true&edition=0&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=14&gold=true&edition=0&tab=cards');
if(text3.indexOf('G-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////4
await page.goto('https://splinterlands.com/?p=card_details&id=103&gold=true&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text4 = await page.$eval('html', element => element.textContent)
if(text4.indexOf("G3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=103&gold=true&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=103&gold=true&edition=3&tab=cards');
if(text4.indexOf('G3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////5
await page.goto('https://splinterlands.com/?p=card_details&id=264&gold=false&edition=5&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text5 = await page.$eval('html', element => element.textContent)
if(text5.indexOf("C5-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=264&gold=false&edition=5&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=264&gold=false&edition=5&tab=cards');
if(text5.indexOf('C5-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=232&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text6 = await page.$eval('html', element => element.textContent)
if(text6.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=232&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=232&gold=false&edition=3&tab=cards');
if(text6.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////7
await page.goto('https://splinterlands.com/?p=card_details&id=93&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text7 = await page.$eval('html', element => element.textContent)
if(text7.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=93&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=93&gold=false&edition=3&tab=cards');
if(text7.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////8
await page.goto('https://splinterlands.com/?p=card_details&id=134&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text8 = await page.$eval('html', element => element.textContent)
if(text8.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=134&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=134&gold=false&edition=3&tab=cards');
if(text8.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////9
await page.goto('https://splinterlands.com/?p=card_details&id=178&gold=true&edition=4&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text9 = await page.$eval('html', element => element.textContent)
if(text9.indexOf("G4-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=178&gold=true&edition=4&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=178&gold=true&edition=4&tab=cards');
if(text9.indexOf('G4-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////10
await page.goto('https://splinterlands.com/?p=card_details&id=13&gold=false&edition=1&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text10 = await page.$eval('html', element => element.textContent)
if(text10.indexOf("C1-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=13&gold=false&edition=1&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=13&gold=false&edition=1&tab=cards');
if(text10.indexOf('C1-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=338&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text11 = await page.$eval('html', element => element.textContent)
if(text11.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=338&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=338&gold=false&edition=3&tab=cards');
if(text11.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=254&gold=false&edition=4&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text12 = await page.$eval('html', element => element.textContent)
if(text12.indexOf("C4-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=254&gold=false&edition=4&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=254&gold=false&edition=4&tab=cards');
if(text12.indexOf('C4-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=259&gold=false&edition=5&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text13 = await page.$eval('html', element => element.textContent)
if(text13.indexOf("C5-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=259&gold=false&edition=5&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=259&gold=false&edition=5&tab=cards');
if(text13.indexOf('C5-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=90&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text14 = await page.$eval('html', element => element.textContent)
if(text14.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=90&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=90&gold=false&edition=3&tab=cards');
if(text14.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=279&gold=false&edition=4&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text15 = await page.$eval('html', element => element.textContent)
if(text15.indexOf("C4-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=279&gold=false&edition=4&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=279&gold=false&edition=4&tab=cards');
if(text15.indexOf('C4-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=85&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text16 = await page.$eval('html', element => element.textContent)
if(text16.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=85&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=85&gold=false&edition=3&tab=cards');
if(text16.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=95&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text17 = await page.$eval('html', element => element.textContent)
if(text17.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=95&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=95&gold=false&edition=3&tab=cards');
if(text17.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=221&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text18 = await page.$eval('html', element => element.textContent)
if(text18.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=221&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=221&gold=false&edition=3&tab=cards');
if(text18.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=31&gold=false&edition=1&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text19 = await page.$eval('html', element => element.textContent)
if(text19.indexOf("C1-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=31&gold=false&edition=1&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=31&gold=false&edition=1&tab=cards');
if(text19.indexOf('C1-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=258&gold=false&edition=5&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text20 = await page.$eval('html', element => element.textContent)
if(text20.indexOf("C5-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=258&gold=false&edition=5&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=258&gold=false&edition=5&tab=cards');
if(text20.indexOf('C5-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=91&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text21 = await page.$eval('html', element => element.textContent)
if(text21.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=91&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=91&gold=false&edition=3&tab=cards');
if(text21.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=131&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text22 = await page.$eval('html', element => element.textContent)
if(text22.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=131&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=131&gold=false&edition=3&tab=cards');
if(text22.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=242&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text23 = await page.$eval('html', element => element.textContent)
if(text23.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=242&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=242&gold=false&edition=3&tab=cards');
if(text23.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=82&gold=false&edition=3&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text24 = await page.$eval('html', element => element.textContent)
if(text24.indexOf("C3-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=82&gold=false&edition=3&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=82&gold=false&edition=3&tab=cards');
if(text24.indexOf('C3-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=237&gold=false&edition=2&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text25 = await page.$eval('html', element => element.textContent)
if(text25.indexOf("C2-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=237&gold=false&edition=2&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=237&gold=false&edition=2&tab=cards');
if(text25.indexOf('C2-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=276&gold=false&edition=5&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text26 = await page.$eval('html', element => element.textContent)
if(text26.indexOf("C5-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=276&gold=false&edition=5&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=276&gold=false&edition=5&tab=cards');
if(text26.indexOf('C5-') !== -1){
console.log("monster already rented ");
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
////////////////////////////////////////////////
////////////////////////////////////////////////6
await page.goto('https://splinterlands.com/?p=card_details&id=262&gold=false&edition=5&tab=cards');
await page.waitForSelector('#active_skin', { timeout: 20000 })
const text27 = await page.$eval('html', element => element.textContent)
if(text27.indexOf("C5-") !== -1){
console.log("monster already rented");

}
else
{
console.log("attempting to rent");
await page.goto('https://splinterlands.com/?p=card_details&id=262&gold=false&edition=5&tab=rentals');
await page.waitForSelector('.price-bcx', { timeout: 20000 })
await page.select('#market_sort', 'price');
	await page.waitForTimeout(2000);
					await page.waitForSelector('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
					await page.click('table > tbody > tr:nth-child(1) > .check > .card-checkbox');
await page.waitForTimeout(2000);
await page.click('#btn_buy');
await page.waitForTimeout(2000);
await page.$eval('input[type=number]', el => el.value = '1');
page.on('dialog', async dialog => {
await dialog.accept();
});
await page.click('#btn_rent_popup_rent');
await page.waitForSelector('#active_skin', { timeout: 20000 })
await page.goto('https://splinterlands.com/?p=card_details&id=262&gold=false&edition=5&tab=cards');
if(text27.indexOf('C5-') !== -1){
console.log("monster already rented ");
////////////////////////////////// end rent
console.log('renting complete!')

/////////////////////////////
}
else{ console.log('renting failed, retrying...')
await page.waitForTimeout(2000);
}

}
}
catch(error){
	console.log("FE crashed with\n\n" + error + "\n\nRefreshing page and continuing profile switching")
	
	continue;}}
////////////////////////////////////////////////


await page.waitForTimeout(2000);
await browser.close();
  
})();

(async () => {
	
	
  })();