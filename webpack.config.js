const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'src/index.html',
            title: 'Boilerplate for HTML5/Javascript web project with Webpack and Babel ES6 support',
        })
    ]
};