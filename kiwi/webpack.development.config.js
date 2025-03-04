const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  default: ImageCaption,
} = require("../image-caption/src/components/image-caption/image-caption");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/images.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
  },
  mode: "development",
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "image-component.html",
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
      filename: "image-component.html",
      title: "image component!",
      template: "src/page-template.hbs",
      description: "image component",
    }),
    new ModuleFederationPlugin({
      name: "ImageComponentApp",
      // remotes: {
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
