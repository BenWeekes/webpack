const webpack = require("webpack");
const path = require("path");

module.exports = {
  optimization: {
    minimize: true
  },
    entry: './src/AgoraRTCUtil.js',
    output: {
      path: path.resolve('./build/'),
      filename: 'output.sdk.js'
    },
};
