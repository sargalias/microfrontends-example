import webpack from 'webpack';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const { ModuleFederationPlugin } = webpack.container;
const __dirname = dirname(fileURLToPath(import.meta.url));

const domain = process.env.DOMAIN;

const createModuleFederationConfig = (isDevelopmentBuild) => {
  let authPath;
  let marketingPath;

  if (isDevelopmentBuild) {
    authPath = 'http://localhost:8082/remoteEntry.js';
    marketingPath = 'http://localhost:8081/remoteEntry.js';
  } else {
    authPath = `${domain}/auth/latest/remoteEntry.js`;
    marketingPath = `${domain}/marketing/latest/remoteEntry.js`;
  }

  return new ModuleFederationPlugin({
    name: 'host',
    remotes: {
      authApp: `authApp@${authPath}`,
      marketingApp: `marketingApp@${marketingPath}`,
    },
  });
};

const commonConfig = (env) => {
  const moduleFederationConfig = createModuleFederationConfig(env.development);

  return {
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
      moduleFederationConfig,
    ],
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  };
};

export default commonConfig;
