const { exec } = require("child_process");

const urls = [
  "https://www.lloydsibson.com",
  "https://www.lloydsibson.com/about",
  "https://www.lloydsibson.com/portfolio",
  "https://www.lloydsibson.com/contact",
];

urls.forEach((url) => {
  // Generate a unique filename for each URL's report
  const filename = url.split("//")[1].replace(/\W+/g, "_") + ".html";
  const options = `--output=html --output-path=./lighthouse/${filename}`;

  exec(`lighthouse ${url} ${options}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(
      `Lighthouse report for ${url} generated at ./lighthouse/${filename}.`
    );
  });
});
