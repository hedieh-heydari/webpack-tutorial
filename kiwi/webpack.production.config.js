const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/images.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, //change number from 8(default) to 3
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "image-component.html",
      title: "image component!",
      template: "src/page-template.hbs",
      description: "image component",
      minify: false,
    }),
    new ModuleFederationPlugin({
      name: "KiwiApp",
      // remotes: {C:\Users\h.heidari\Desktop\webpack tutorial\kiwi\src\components\kiwi-page\kiwi-page.js
      //   HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
      // },
      filename: "remoteEntry.js",
      exposes: {
        "./KiwiPage": "./src/components/kiwi-page/kiwi-page.js",
      },
      remotes: {
        ImageCaptionApp: "ImageCaptionApp@http://localhost:9003/remoteEntry.js",
      },
    }),
  ],
};
