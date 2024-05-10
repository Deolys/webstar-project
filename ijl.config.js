const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'webstar-project.main': '/webstar-project',
    'webstar-project.card.add': '/add-card',
    'webstar-project.card.detail': '/card/:cardId',
    'webstar-project.card.detail.edit': '/card/:cardId/edit',
    'webstar-project.login': '/login',
    'webstar-project.register': '/register',
    'webstar-project.favourites': '/favourites',
    'webstar-project.admin': '/admin',
  },
  features: {
    'webstar-project': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value'
  }
}
