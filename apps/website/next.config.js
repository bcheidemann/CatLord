// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  webpack: (config, { dev, isServer }) => {
    switch (process.env.FRAMEWORK) {
      case 'react':
        Object.assign(config.resolve.alias, {
          'preact/debug': 'react',
        });
        break;
      case 'preact':
      default:
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
        break;
    }

    return config;
  }
};

module.exports = withNx(nextConfig);
