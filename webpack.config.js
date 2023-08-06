const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  
  output: {
    path: path.resolve(__dirname, "srv/app"),
    filename: 'bundle-[contenthash:6].js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    liveReload: false,
    hot: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[ext]'
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '', noErrorOnMissing: true },
        { from: 'src/asset/images/chalet', to: 'img', noErrorOnMissing: true },
        { from: 'src/asset/images/trips', to: 'img', noErrorOnMissing: true },
      ],
    }),
  ],
};
