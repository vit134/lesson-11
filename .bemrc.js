module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/common',
      scheme: 'nested'
    },
    {
      layer: 'desktop',
      path: 'src/desktop',
      scheme: 'nested'
    },
    {
      layer: 'touch',
      path: 'src/touch',
      scheme: 'nested'
    }
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common desktop',
    touch: 'common touch'
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
