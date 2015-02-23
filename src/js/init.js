require('document-register-element');
require('reactive-elements');
var GoogleBooksSearch = require('./google-books-search/main.jsx');

document.registerReact('google-books-search', GoogleBooksSearch);
