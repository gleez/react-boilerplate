var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval',
  entry: {
    app: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/index']
  },
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'bundle.js',
    //filename: '[name].[hash].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('app', null)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpeg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
