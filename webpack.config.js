module.exports = {
    entry: './src/app.js',
    output: {
        path: './lib',
        filename: 'app.bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react",'react'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]

    }
}