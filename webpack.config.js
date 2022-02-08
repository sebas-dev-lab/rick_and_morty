const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = (env) => {
  return {
    // ======================== Server configuration ======================== //
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 4050,
    },
    // ======================== Input -- output configuration ======================== //
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.bundle-[hash].js",
    },

    //   ======================== Rules configurations ======================== //
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s?css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      ],
    },
    // ======================== ext configurations ======================== //
    resolve: {
      extensions: [".js", ".json", ".jsx"],
    },

    // ======================== Enviroment configuration ======================== //
    mode: process.env.NODE_ENV || "development",

    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        filename: "index.html",
      }),
      new Dotenv({
        path: `./.env${env.file ? `.${env.file}` : ""}`,
      }),
    ],
  };
};
