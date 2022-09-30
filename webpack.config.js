const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
              plugins: ["@issr/babel-plugin"],
            },
          },
        ],
      },

      {
        test: /\.(c)ss$/,
        use: ["style-loader", "css-loader"],
      },

      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // parse CSS and add vendor prefixes to CSS rules
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader?name=./fonts/[name].[ext]",
          },
        ],
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: "file-loader?name=./static/[name].[ext]",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".jpg", ".svg", ".png", ".scss"],
  },
};

module.exports = [
  {
    ...commonConfig,
    target: "node",
    entry: "./src/server.jsx",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "index.js",
    },
    plugins: [
      new NodemonPlugin({
        watch: path.resolve(__dirname, "./dist"),
      }),
      new MiniCssExtractPlugin(),
    ],
  },
  {
    ...commonConfig,
    entry: "./src/client.jsx",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "index.js",
    },
    plugins: [
      new NodemonPlugin({
        watch: path.resolve(__dirname, "./dist"),
      }),
      new MiniCssExtractPlugin(),
    ],
  },
];
