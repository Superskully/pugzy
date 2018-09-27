const routes = require('next-routes')

module.exports = routes()
    .add('home', '/')
    .add('about')
    .add('gallery', '/gallery/:id/:slug')
    .add('artwork', '/artwork/:id/:slug')