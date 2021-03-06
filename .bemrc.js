module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/common',
      scheme: 'nested'
    },
    {
      layer: 'tablet',
      path: 'src/tablet',
      scheme: 'nested'
    },
    {
      layer: 'phone',
      path: 'src/phone',
      scheme: 'nested'
    }
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common',
    tablet: 'common tablet',
    phone: 'common phone'
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/common': { default: true }
          },
          techs: ['js', 'css'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
}
