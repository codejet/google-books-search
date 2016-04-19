jest.unmock('../src/js/items.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Items } from '../src/js/items.jsx';

describe('Items', function() {
  const data = [
    {
      "volumeInfo": {
        "title": "Beginning HTML5 and CSS3",
        "subtitle": "The Web Evolved",
        "authors": [
          "Christopher Murphy",
          "Richard Clark",
          "Oli Studholme",
          "Divya Manian"
        ],
        "publishedDate": "2012-10-31",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=lP29IJbC6ooC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.de/books?id=lP29IJbC6ooC&printsec=frontcover&dq=css3&hl=&cd=4&source=gbs_api"
        },
      "searchInfo": {
        "textSnippet": "With a practical, accessible approach, this book is for anyone who wants to push their websites forwards with the latest technologies."
      }
    },
    {
      "volumeInfo": {
        "title": "CSS3",
        "subtitle": "Leitfaden für Webdesigner",
        "authors": [
          "Florence Maurice"
        ],
        "publishedDate": "2011",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Ek7KMVoL690C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.de/books?id=Ek7KMVoL690C&printsec=frontcover&dq=css3&hl=&cd=2&source=gbs_api"
      }
    }
  ];
  const items = TestUtils.renderIntoDocument(
    <Items subtitleMaxLength={10} snippetMaxLength={15} data={data} />
  );
  const results = ReactDOM.findDOMNode(items, 'li');

  it('renders all received items', function() {
    expect(TestUtils.scryRenderedDOMComponentsWithTag(items, 'li').length).toEqual(data.length);
  });

  it('renders lists of authors correctly', function() {
    expect(results.textContent).toContain('Christopher Murphy, Richard Clark, Oli Studholme, Divya Manian');
  });

  it('renders truncated subtitles according to the value of the subtitleMaxLength property', function() {
    expect(results.textContent).toContain('The Web Ev...');
  });

  it('renders truncated snippets according to the value of the snippetMaxLength property', function() {
    expect(results.textContent).toContain('With a practica...');
  });

  it('renders years extracted from the publishing dates', function() {
    expect(results.textContent).toContain('2012');
    expect(results.textContent).not.toContain('2012-10-31');
  });
});
