var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app: './src/index',
  },
  output: {
    path: path.join(__dirname, 'public/assets/'),
    filename: 'app.[hash].js',
    //chunkFilename: '[id].[hash].chunk.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: true,
      beautify: true,
      output: {
        beautify: false,
        ascii_only: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('app', null, Infinity),
    new ExtractTextPlugin("[name].[hash].css", {allChunks: true}),
    new HtmlWebpackPlugin({title: "React • Starter Kit", filename: '../index.html', template: 'index.tmpl'})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [path.resolve(__dirname, "node_modules/formsy-react")]
    }],
    loaders: [
      {
        test: /\.jsx?$/, loader: 'babel',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src')
      },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer?browsers=last 3 versions") },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
