module.exports = {
  extends: "lighthouse:default",
  formFactor: "desktop",
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
        path: "metrics/accessibility",
        options: { score: 0.9 },
      },
    ],
  },
};
