module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        filename: 'app/js/main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
}