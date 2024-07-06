const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function scrapeWebsite(url) {
  try {
    // Fetch the HTML of the website
    const { data } = await axios.get(url);

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Extract specific elements
    const latestGamePlayed = $(
      "#gamesTable tbody > tr:nth-child(1) > td:nth-child(2) a.title"
    ).text();

    const scrapedData = { latestGamePlayed };
    fs.writeFileSync(
      "src/scrapedData.json",
      JSON.stringify(scrapedData, null, 2)
    );
    console.log("Scraping completed and data saved.");
  } catch (error) {
    console.error(`Error scraping the website: ${error.message}`);
    return [];
  }
}

// Example usage
scrapeWebsite("https://psnprofiles.com/Lloyduss");
