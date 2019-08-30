const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    // Set the single-spa config as the project entry point
    "single-spa.config": "./single-spa.config.js"
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.common.js" // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  externals: ["vue", "vue-router"],
  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ["style-loader", "css-loader", "vue-style-loader"]
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")]
  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true
  }
};
