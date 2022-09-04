/*
 *  filename: webpack.config.js
 *  description: --
 **/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp4)$/i, 
                type: "asset/resource"
            },
        ]
    },
    devServer: {
        static: "./dist",
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './dist/index.html',
            favicon: "./assets/images/favicon.png",
        }),
    ],
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, "dist"),
    },
};
