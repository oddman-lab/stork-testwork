const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/assets/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/js/'),
  },
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  node: {
    __dirname: true,
  },
};
