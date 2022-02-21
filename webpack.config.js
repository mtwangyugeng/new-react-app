const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    devServer: {
        static: './dist/',
        hot: true,
        devMiddleware: {
            publicPath: '/dist/',
            writeToDisk: true,
         },    
       },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-react', {"runtime": "automatic"}], '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
            },
            },
        },
        {
            test: /\.scss$/,
            use:[
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                'sass-loader',
            ],
            
        },
        {
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader',
            ],
        }
        ],
    },
};