module.exports = {
  extends: "lighthouse:default",
  emulatedUserAgent: false,
  settings: {
    formFactor: "desktop",
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
