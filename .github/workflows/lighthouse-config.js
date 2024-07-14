module.exports = {
  extends: "lighthouse:default",
  settings: {
    emulatedFormFactor: "desktop",
    preset: "desktop",
    screenEmulation: {
      width: 1920,
      height: 1080,
      deviceScaleRatio: 1,
      mobile: false,
      disabled: false,
    },
    audits: [
      {
        path: "metrics/performance-score",
        options: { scorePODR: 800, scoreMedian: 1600 },
      },
    ],
  },
};
