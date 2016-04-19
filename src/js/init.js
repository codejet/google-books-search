require('document-register-element');
require('reactive-elements');
const GoogleBooksSearch = require('./google-books-search.jsx').default;

document.registerReact('google-books-search', GoogleBooksSearch);
