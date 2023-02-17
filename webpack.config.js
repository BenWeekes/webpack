const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
        },
      }),
    ],
  },
    entry: './src/AgoraRTCUtil.js',
    output: {
      path: path.resolve('./build/'),
      filename: 'output.sdk.js'
    },
};
