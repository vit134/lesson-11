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
      layer: 'mobile',
      path: 'src/mobile',
      scheme: 'nested'
    }
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common',
    tablet: 'common tablet',
    mobile: 'common mobile'
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
