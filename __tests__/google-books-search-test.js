jest.unmock('../src/js/google-books-search.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import qwest from 'qwest';
import { GoogleBooksSearch } from '../src/js/google-books-search.jsx';

describe('GoogleBooksSearch', function() {
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
