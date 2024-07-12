const { exec } = require("child_process");

const urls = [
  "https://www.lloydsibson.com",
  "https://www.lloydsibson.com/about",
  "https://www.lloydsibson.com/portfolio",
  "https://www.lloydsibson.com/contact",
];

const formFactors = ["mobile", "desktop"];

urls.forEach((url) => {
  formFactors.forEach((formFactor) => {
    const filename = `${url
      .split("//")[1]
      .replace(/\W+/g, "_")}_${formFactor}.html`;
    // Include the --headless flag in the options
    const options = `--output=html --output-path=public/lighthouse-reports/${filename} --emulated-form-factor=${formFactor} --chrome-flags="--headless"`;

    exec(`lighthouse ${url} ${options}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(
        `Lighthouse report for ${url} (${formFactor}) generated at ./lighthouse/${filename}.`
      );
    });
  });
});
