
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{index:__dirname + '/src/index.js'},
    output:{
        path:__dirname+'/libs',
        filename:"[name].js"
        //filename:"index.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:['babel-loader']
            },
            {
                test:/\.css/,
                loader:[
                    'style!css',
                    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]',
                    'postcss-loader'
                ]
            }
        ]
    },
    devtool:"cheap-module-source-map",
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack demo',
            template:'./src/index.html'
        })
    ]
    //,devServer:{
    //    progress:true,
    //    contentBase:'libs',
    //    stats:{colors:true},
    //    inline:true,
    //    publicPath:'./static/'
    //}
}