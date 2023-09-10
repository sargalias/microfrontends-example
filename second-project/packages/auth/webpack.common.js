import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
const { ModuleFederationPlugin } = webpack.container;

const __dirname = dirname(fileURLToPath(import.meta.url));

const commonConfig = {
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(tsx?|m?jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheCompression: true,
          },
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new ModuleFederationPlugin({
      name: 'AuthApp',
      filename: 'remoteEntry.js',
      exposes: ['./src/Bootstrap'],
    }),
  ],
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
};

export default commonConfig;
