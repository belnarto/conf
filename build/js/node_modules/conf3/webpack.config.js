var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js\\packages\\conf3\\kotlin\\conf3.js"]
};

config.output = {
    path: "C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "conf3.js"
            : "conf3-[name].js";
    },
    library: "conf3",
    libraryTarget: "umd",
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "port": 8080,
  "contentBase": [
    "C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\processedResources\\Js\\main"
  ]
};

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\reports\\webpack\\conf3\\webpack.config.evaluated.js", evaluatedConfig, function (err) {});

module.exports = config
