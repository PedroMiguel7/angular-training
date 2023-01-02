const PROXY_CONFIG = [
  {
    context: ["/api"],
    targe: "http://localhost:8000/",
    secure: false,
    logLeve: "debug",
    pathRewrite: { "^/api": "" },
  },
];

module.exports = PROXY_CONFIG;
