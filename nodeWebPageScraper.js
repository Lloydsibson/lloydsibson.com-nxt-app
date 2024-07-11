const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function scrapeWebsite(url, selectors) {
  try {
    // Fetch the HTML of the website
    const { data } = await axios.get(url);

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Extract data for each selector
    const results = selectors.map(({ selector, methods }) => {
      let element = $(selector);

      // Dynamically apply the methods with arguments
      methods.forEach(({ method, args }) => {
        element = element[method](...args);
      });

      return element;
    });

    console.log(`Scraping completed for ${url}. Data extracted:`, results);
    return results;
  } catch (error) {
    console.error(`Error scraping the website ${url}: ${error.message}`);
    return null;
  }
}

// Example of using the reusable function for multiple websites
(async () => {
  const sites = [
    {
      title: "psnProfiles",
      url: "https://psnprofiles.com/Lloyduss",
      selectors: [
        {
          selector:
            "#gamesTable tbody > tr:nth-child(1) > td:nth-child(2) a.title",
          methods: [{ method: "text", args: [] }],
        },
      ],
    },
    {
      title: "wosBingSearch",
      url: "https://www.bing.com/news/search?q=watches+of+switzerland&qft=interval%3d%229%22&form=YFNR",
      selectors: [
        {
          selector: ".news-card",
          methods: [
            { method: "first", args: [] },
            { method: "find", args: [".snippet"] },
            { method: "text", args: [] },
          ],
        },
        {
          selector: ".news-card .title",
          methods: [
            { method: "first", args: [] },
            { method: "attr", args: ["href"] },
          ],
        },
      ],
    },
    // Add more sites and selectors as needed
  ];

  const results = [];

  for (const site of sites) {
    const siteResults = await scrapeWebsite(site.url, site.selectors);
    results.push({
      title: site.title,
      url: site.url,
      data: siteResults,
    });
  }

  // Save the results to a JSON file
  fs.writeFileSync("scrapedData.json", JSON.stringify(results, null, 2));
  console.log("All scraping completed and data saved to scrapedData.json.");
})();
