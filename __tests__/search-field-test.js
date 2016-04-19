jest.unmock('../src/js/search-field.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { SearchField } from '../src/js/search-field.jsx';

describe('SearchField', function() {
  const node = document.createElement('div');
  let onUserActionCallback, searchField, input, icon;

  beforeEach(function() {
    onUserActionCallback = jest.genMockFunction();
    searchField= ReactDOM.render(<SearchField query={''} onUserAction={onUserActionCallback}  />, node);
    input = ReactDOM.findDOMNode(searchField.refs.queryInput);
    icon = ReactDOM.findDOMNode(searchField.refs.searchIcon);
  });

  describe('clicking the magnifier icon', function() {
    it('inits a search when the query is new or has changed since the last search', function() {
      ReactDOM.render(<SearchField query={'css'} onUserAction={onUserActionCallback}  />, node);
      input.value = 'css3';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).toBeCalled();
    });

    it('prevents a search when the query param has not changed', function() {
      ReactDOM.render(<SearchField query={'css3'} onUserAction={onUserActionCallback}  />, node);
      input.value = 'css3';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).not.toBeCalled();
    });

    it('prevents a search when the query param is empty', function() {
      input.value = '';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).not.toBeCalled();
    });
  });

  describe('pressing the enter key', function() {
    it('inits a search when the query is new or has changed since the last search', function() {
      ReactDOM.render(<SearchField query={'css'} onUserAction={onUserActionCallback}  />, node);
      input.value = 'css3';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).toBeCalled();
    });

    it('prevents a search when the query param has not changed', function() {
      ReactDOM.render(<SearchField query={'css3'} onUserAction={onUserActionCallback}  />, node);
      input.value = 'css3';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).not.toBeCalled();
    });

    it('prevents a search when the query param is empty', function() {
      input.value = '';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).not.toBeCalled();
    });
  });
});
