const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    module:{
        rules:[
                {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
                },
                {
                test: /\.html$/,
                use:[
                    { loader: 'html-loader'}
                ]
                },
                {
                test: /\.s[ac]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
                },
                {
                test: /\.(png|gif|jpg)$/,
                use:[
                    {
                    'loader': 'file-loader',
                    options: {
                        name: 'assets/[hash].[ext]'
                    }
                    }
                ]    
                },
                {
                test: /\.svg$/,
                use: [
                    {
                    loader: 'svg-inline-loader'
                    }
                ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer:{
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
    }
}