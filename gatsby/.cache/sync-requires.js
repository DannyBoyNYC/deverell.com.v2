const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danieldeverell/Desktop/deverell.com-ver2/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-books-js": hot(preferDefault(require("/Users/danieldeverell/Desktop/deverell.com-ver2/gatsby/src/pages/books.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danieldeverell/Desktop/deverell.com-ver2/gatsby/src/pages/index.js")))
}

