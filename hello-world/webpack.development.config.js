const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/hello-world.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9001/",
  },
  mode: "development",
  devServer: {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "hello-world.html",
      writeToDisk: true,
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),

    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      title: "hello world!",
      template: "src/page-template.hbs",
      description: "hello world",
    }),
    new ModuleFederationPlugin({
      name: "HelloWorldApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWorldButton":
          "./src/components/hello-world-button/hello-world-button.js",
        "./HelloWorldPage":
          "./src/components/hello-world-page/hello-world-page.js",
      },
    }),
  ],
};
