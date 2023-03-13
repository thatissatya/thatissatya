const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
module.exports = {
    entry:  path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                resolve: {
                    extensions: [".js", ".jsx"]
                },
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
  
        new CleanWebpackPlugin(),
    ],
    mode: 'development'
}