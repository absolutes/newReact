module.exports = {
    entry:__dirname + '/src/index.js',
    output:{
        path:__dirname+'/libs',
        filename:"[name]-[hash].js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'jsx-loader'
            }
        ]
    }
}