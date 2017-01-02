// This is primarily based off the excellent introduction at:
// http://survivejs.com/webpack/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  template: path.join(__dirname, 'app', 'index.tmpl.html'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Actions: path.resolve(__dirname, 'app/actions'),
      Components: path.resolve(__dirname, 'app/components'),
      Constants: path.resolve(__dirname, 'app/constants'),
      Containers: path.resolve(__dirname, 'app/containers'),
      Pages: path.resolve(__dirname, 'app/components/pages'),
      Reducers: path.resolve(__dirname, 'app/reducers'),
      Routes: path.resolve(__dirname, 'app/routes'),
      Sagas: path.resolve(__dirname, 'app/sagas'),
      Store: path.resolve(__dirname, 'app/store'),
      Styles: path.resolve(__dirname, 'app/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader?compact=false&cacheDirectory=true',
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.template
    })
  ]
};

module.exports = function(env) {
  process.env.BABEL_ENV = env;

  if (env === 'prod') {
    return merge(
      common,
      {
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: [
          'react',
          'react-dom',
          'react-router',
          'redux',
          'react-redux',
          'redux-saga'
        ]
      }),
      parts.minify(),
      parts.extractCSS(PATHS.app),
      parts.purifyCSS([PATHS.app])
    );
  }

  return merge(
    common,
    {
      devtool: 'eval-source-map',
      performance: {
        hints: false
      }
    },
    parts.setupCSS(PATHS.app),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
};
