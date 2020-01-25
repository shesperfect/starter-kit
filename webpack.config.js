const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/style/index.scss'],
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ['/src/style'],
              },
            },
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "images"
            }
          }
        ]
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: './src/public',
    watchContentBase: true,
    port: 3333,
  }
};
