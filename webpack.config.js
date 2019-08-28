module.exports = {
    entry: [
        __dirname + '/static/js/main.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    }
};
