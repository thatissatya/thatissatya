const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
                resolve: {
                    extensions: ["", ".js", ".jsx", ".es6"]
                },
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    mode: 'development'
}