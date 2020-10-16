const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        contentBase: './build'
    }
};