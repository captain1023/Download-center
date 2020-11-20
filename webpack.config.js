// 用于拼接路径
var path = require('path');

module.exports = {
    // 指定项目入口
    entry: path.resolve(__dirname, './src/App.jsx'),

    // 对输出结果描述
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'build'),
        // 输出的文件名
        filename: 'bundle.js'
    },

    devServer: {
        compress: true,
        port: 23000,
        hot: true,
        historyApiFallback: true,
        disableHostCheck: true,
        quiet: false,
        open: true,
        inline: true,
        host: 'download',
        proxy: [],
    },

    // 配置模块使用的加载器
    module: {
        loaders: [
            {
                test:/\.scss$/,
                loaders:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.jsx?$/,
                loaders: ['babel-loader']
            }]
    },
}
