const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const CopyPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const DEV_PORT = process.env.PORT || 9000;

module.exports = {
  mode: IS_PRODUCTION ? "production" : "development",
  devtool: IS_PRODUCTION ? false : "inline-source-map",

  entry: {
    app: ["./src/index.tsx"],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },

  devServer: {
    contentBase: "./src",
    index: path.resolve(__dirname, "src/index.html"),
    port: DEV_PORT,
    https: false,
    inline: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("ts-loader"),
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve("style-loader"),
          require.resolve("css-loader"),
          {
            loader: require.resolve("postcss-loader"),
            options: {
              plugins: [autoprefixer],
            },
          },
          require.resolve("sass-loader"),
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.ya?ml$/,
        type: "json",
        use: "yaml-loader",
      },
    ],
  },

  plugins: [
    new WebpackNotifierPlugin(),
    new CopyPlugin({
      patterns: [
        "public/index.html", // to: dist/
      ],
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
  },
};
