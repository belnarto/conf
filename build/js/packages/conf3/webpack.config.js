var config = {
  mode: 'production',
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
    main: ["C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js\\packages\\conf3\\kotlin-dce\\conf3.js"]
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

// resolve modules
config.resolve.modules.unshift("C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js\\packages\\conf3\\kotlin-dce")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\reports\\webpack\\conf3\\webpack.config.evaluated.js", evaluatedConfig, function (err) {});

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        let p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace(new RegExp("C:\\Users\\ZinchenkoAY\\Documents\\github\\conf3\\build\\js", 'g'), '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);
module.exports = config
