module.exports = {
  extends: "lighthouse:default",
  settings: {
    screenEmulation: {
      width: 1920,
      height: 1080,
      deviceScaleRatio: 1,
      mobile: false,
      disabled: true,
    },
    audits: [
      {
        path: "metrics/first-contentful-paint",
        options: { scorePODR: 800, scoreMedian: 1600 },
      },
    ],
  },
};
