module.exports = {
  webpack5: true,
  eslint: {
    dirs: ['components', 'lib', 'pages']
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    domains: ['api.craft.do'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/api/htmlrewrite?pathname=index',
      },
      {
        source: '/b/:slug*',
        destination: '/api/htmlrewrite?pathname=index&slug=/b/:slug*',
      },
      {
        source: '/x/:slug*',
        destination: '/api/htmlrewrite?pathname=index&slug=/x/:slug*',
      },
      {
        source: '/api/:slug*',
        destination: 'https://www.craft.do/api/:slug*',
      },
      {
        source: '/share/static/js/:slug*',
        destination: '/api/jsrewrite?url=https://www.craft.do/share/static/js/:slug*',
      },
      {
        source: '/share/static/css/:slug*',
        destination: 'https://www.craft.do/share/static/css/:slug*',
      },
      {
        source: '/share/static/fonts/:slug*',
        destination: 'https://www.craft.do/share/static/fonts/:slug*',
      },
      {
        source: '/share/static/media/:slug*',
        destination: 'https://www.craft.do/share/static/media/:slug*',
      },
      {
        source: '/share/static/craft.webmanifest',
        destination: 'https://www.craft.do/share/static/craft.webmanifest',
      },
      {
        source: '/assets/js/analytics2.js',
        destination: 'https://www.craft.do/404',
      },
      {
        source: '/:pathname*',
        destination: '/api/htmlrewrite?pathname=:pathname*',
      }
    ]
  }
}
