var path = require('path');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'www/'),
    publicPath: '',
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  devServer: {
     contentBase: path.join(__dirname, 'www')
  }
}
