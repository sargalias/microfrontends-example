import webpack from 'webpack';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import packageJson from './package.json' assert { type: 'json' };

const { ModuleFederationPlugin } = webpack.container;
const __dirname = dirname(fileURLToPath(import.meta.url));

const domain = process.env.DOMAIN;

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
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      moduleFederationConfig,
    ],
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  };
};

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
    shared: {
      react: {
        requiredVersion: packageJson.dependencies.react,
        singleton: true,
      },
      'react-dom': {
        requiredVersion: packageJson.dependencies['react-dom'],
      },
      '@fontsource/roboto': {
        requiredVersion: packageJson.dependencies['@fontsource/roboto'],
      },
    },
  });
};

export default commonConfig;
