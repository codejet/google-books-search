require('document-register-element');
require('reactive-elements');
var GoogleBooksSearch = require('./google-books-search.jsx');

document.registerReact('google-books-search', GoogleBooksSearch);
