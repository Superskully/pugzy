const routes = require('next-routes')

module.exports = routes()

    .add('about')

    .add('gallery', 'gallery/:id/:slug')

    .add('artwork', 'artwork/:id/:slug')