var config = {
entry: './static/js/main.js',

output: {
path: './static/js/',
filename: 'index.js'
},

devServer: {
inline: true,
port: 5000
},

module: {
loaders: [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['es2015', 'react']
    }
  }
]
}
}

module.exports = config;
