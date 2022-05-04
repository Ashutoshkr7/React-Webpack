const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"), //entry point of the
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //This configuration allows us to leave off the file extension when importing
    //For example, we have left off .tsx in line 2 index.tsx folder
    //Firstly it will check for .tsx, if not found then .ts and so on
  },
  module: {
    rules: [
      //indicating that the webpack should use babel-loader for all .ts, .tsx, .js, .jsx files excluding the node_modules folder
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  output: {
    //bundled pack should be placed inside the file called bundle.js & bundle.js should be placed inside ./build folder
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development", //sets process.env.node_env to development
  plugins: [
    new HtmlWebpackPlugin({
      //inject bundle.js file into the index.html file and place the index.html file into the build folder
      //we have not specified the script tags in the index.html file as it is taken care of by this plugin
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
