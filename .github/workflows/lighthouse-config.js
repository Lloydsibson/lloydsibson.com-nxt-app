module.exports = {
  extends: "lighthouse:default",
  formFactor: "desktop",
  emulatedUserAgent: false,
  settings: {
    screenEmulation: {
      width: 1920,
      height: 1080,
      deviceScaleRatio: 1,
      mobile: false,
      disabled: false,
    },
    audits: [
      {
        path: "metrics/accessibility",
        options: { score: 0.9 },
      },
    ],
  },
};
