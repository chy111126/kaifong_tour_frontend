// Output directory name
var appName = 'frontpage';

// Webpack denepdencies
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var APP_DIR = path.resolve(__dirname);

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: path.resolve(APP_DIR, '../../build/' + appName),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader?modules=true&camelCase=dashes&localIdentName=[name]__[local]___[hash:base64:5]" },
            { test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=bundled/fonts/[name].[ext]" },
            { test: /\.(png|jpg|svg|webp)$/, loader: "file-loader?name=bundled/images/[name].[ext]"},
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            }
        ]
    },
    resolve: {
        alias:{
          root_path: path.resolve( __dirname, '../../' ),
          node_module_path: path.resolve( __dirname, '../../node_modules' ),
          component_path: path.resolve( __dirname, '../../component' ),
        },
        extensions: ['.js', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html 
          filename: 'index.html',
          template: 'index.html'
        })
    ]
}
