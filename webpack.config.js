var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var projectRoot = process.cwd() // Absolute path to the project root
var resolveRoot = path.join(projectRoot, 'node_modules') // project root/node_modules
var buildPath = './build/'

var HMR = new webpack.HotModuleReplacementPlugin()

var namedM = new webpack.NamedModulesPlugin()
// prints more readable module names in the browser console on HMR updates

var extractCSS = new ExtractTextPlugin('app.css')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js')

var copy = new CopyWebpackPlugin([{from: 'public'}])
var clean = new CleanWebpackPlugin(['build'], {
    // root: __dirname,
  verbose: true,
  dry: false
})

var plugins = [clean, commonsPlugin, extractCSS, copy, HMR, namedM]

if (process.env.NODE_ENV == 'production') {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }))
  plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  plugins.push(new webpack.optimize.DedupePlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: false }
  }))
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
    vendors: ['babel-polyfill', 'react', 'react-dom', 'react-helmet']
  },
  // devtool: 'source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: buildPath,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [resolveRoot],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$|\.css$/,
        loader: extractCSS.extract('style', ['css', 'postcss', 'sass'])
      },
     /// { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },

      { test: /\.(ttf|eot|svg|woff|png|jpg|svg)(\?\S*)?$/, loader: 'file-loader?/static/name=[name].[ext]' }
    ]
  },

  resolve: {
    root: [
      resolveRoot,
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.json']
  },
  plugins: plugins,
  modulesDirectories: [
    'node_modules'

  ],
  postcss: function () {
    return [
      autoprefixer()
    ]
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true
    // enable HMR on the server
  }

}
