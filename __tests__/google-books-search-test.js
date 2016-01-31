jest.dontMock('../src/js/google-books-search/main.jsx');

describe('GoogleBooksSearch', function() {
  const React = require('react');
  const TestUtils = require('react-addons-test-utils');
  const qwest = require('qwest');
  const GoogleBooksSearch = require('../src/js/google-books-search/main.jsx');

  describe('with no query attribute being present on the element', function() {
    it('does not trigger an initial search', function() {
      const googleBookSearch = TestUtils.renderIntoDocument(
        <GoogleBooksSearch />
      );

      expect(qwest.get).not.toBeCalled();
    });
  });

  describe('with a query attribute being present on the element', function() {
    it('inits the initial search with the given attribute values', function() {
      const googleBookSearch = TestUtils.renderIntoDocument(
        <GoogleBooksSearch query="css" maxResults="10" orderBy="newest" />
      );

      expect(qwest.get).toBeCalledWith('https://www.googleapis.com/books/v1/volumes', {
        "q": "css",
        "maxResults": "10",
        "orderBy": "newest",
        "fields": "items(volumeInfo/title,volumeInfo/previewLink,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/imageLinks/smallThumbnail,searchInfo/textSnippet)"
      });
    });
  });
});
