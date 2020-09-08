require("events").EventEmitter.setMaxListeners = 20;
const puppeteer = require("puppeteer");
const data = data;

async function runAuto({ browserWSEndpoint, data }) {
  // fetch our running browser
  const browser = await puppeteer.connect({
    browserWSEndpoint
  });
  console.log(data);
  // start the actual automation
  const page = await browser.newPage();
  await page.goto("https://app.fraudfilter.io/members/clientarea.php");
  await page.evaluate(() => {
    document.querySelector("input[id='inputEmail']").value =
      "bertram.pecher@freenetdigital.com";
    document.querySelector("#inputPassword").value = "Bockwurst,0815";
  });
  await page.$eval("#login", elem => elem.click());
  await page.goto("https://manage.fraudfilter.io/members/dashboard.php");
  await page.goto("https://app.fraudfilter.io/#/campaign/new", {
    waitUntil: ["networkidle2", "domcontentloaded"]
  });
  // await page.waitForSelector('input[placeholder="Private Title"]');
  // await page.waitForSelector('md-select[placeholder="Traffic Source"]');
  await page.evaluate(() => {
    // Type title
    document.querySelector('input[placeholder="Private Title"]').innerHTML =
      "Testinggg";
    // `${data.siteName}`
    // Select traffic source
    document.querySelector('md-select[placeholder="Traffic Source"]').value =
      "Facebook Ads";
  });
  console.log("FIRED1");

  // Go to money page
  // Input mone page URL
  await page.$eval('md-tab-item[tabindex="-1"]', elem => elem.click());
  console.log("FIRED2");

  // Go to safe page
  // Input safe page URL
  //Click on create and integrate - done

  // cleanup
  await page.waitFor(10 * 1000);
  console.log("FIRED3");

  await page.close();
  console.log("FIRED4");

  await browser.close();
}

export default runAuto;
