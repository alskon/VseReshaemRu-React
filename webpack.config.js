const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
 
//формируем настройки
module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/' 
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]},
                        
                }

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            
            //img loader
            {
                test: /\.(svg|png|jpe?g|)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '../img/[name].[ext]',
                    },
                },
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            },
            
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [      
        new CleanWebpackPlugin(),
        new ExtractTextPlugin(
            {filename: 'css/style.css', disable: false, allChunks: true}
        ),
        new CopyPlugin([
            { from: 'src/img', to: 'img' },
        ]),
       
    ]

};