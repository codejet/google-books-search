jest.dontMock('../src/js/search-field/main.jsx');

describe('SearchField', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var SearchField = require('../src/js/search-field/main.jsx');
  var onUserActionCallback, searchField, input, icon;

  beforeEach(function() {
    onUserActionCallback = jest.genMockFunction();
    searchField = TestUtils.renderIntoDocument(
      <SearchField query={''} onUserAction={onUserActionCallback}  />
    );
    input = React.findDOMNode(searchField.refs.queryInput);
    icon = React.findDOMNode(searchField.refs.searchIcon);
  });

  describe('clicking the magnifier icon', function() {
    it('inits a search when the query is new or has changed since the last search', function() {
      searchField.props.query = 'css';
      input.value = 'css3';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).toBeCalled();
    });

    it('prevents a search when the query param has not changed', function() {
      searchField.props.query = 'css3';
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
      searchField.props.query = 'css';
      input.value = 'css3';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).toBeCalled();
    });

    it('prevents a search when the query param has not changed', function() {
      searchField.props.query = 'css3';
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

