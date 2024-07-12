const { exec } = require("child_process");
// Use the local installation of Lighthouse
const lighthouseCmd = "./node_modules/.bin/lighthouse";

const urls = [
  "https://www.lloydsibson.com",
  "https://www.lloydsibson.com/about",
  "https://www.lloydsibson.com/portfolio",
  "https://www.lloydsibson.com/contact",
];

const formFactors = ["mobile", "desktop"];

urls.forEach((url) => {
  formFactors.forEach((formFactor) => {
    const baseFilename = `${url
      .split("//")[1]
      .replace(/\W+/g, "_")}_${formFactor}`;
    const htmlFilename = `public/lighthouse-reports/${baseFilename}.html`;
    //const jsonFilename = `lighthouse-json/${baseFilename}.json`; // Specify a different location for JSON reports

    // Command for HTML report
    const htmlOptions = `--output=html --output-path=${htmlFilename} --emulated-form-factor=${formFactor} --chrome-flags="--headless"`;
    exec(`${lighthouseCmd} ${url} ${htmlOptions}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(
        `HTML Lighthouse report for ${url} (${formFactor}) generated at ./${htmlFilename}.`
      );
    });

    // Command for JSON report
    // const jsonOptions = `--output=json --output-path=${jsonFilename} --emulated-form-factor=${formFactor} --chrome-flags="--headless"`;
    // exec(`lighthouse ${url} ${jsonOptions}`, (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`exec error: ${error}`);
    //     return;
    //   }
    //   console.log(
    //     `JSON Lighthouse report for ${url} (${formFactor}) generated at ./${jsonFilename}.`
    //   );
    // });
  });
});
