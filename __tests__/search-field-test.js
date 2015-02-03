jest.dontMock('../src/js/search-field.jsx');

describe('SearchField', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var SearchField = require('../src/js/search-field.jsx');
  var onUserActionCallback, searchField, input;

  beforeEach(function() {
    onUserActionCallback = jest.genMockFunction();
    searchField = TestUtils.renderIntoDocument(
      <SearchField query={''} onUserAction={onUserActionCallback}  />
    );
    input = TestUtils.findRenderedDOMComponentWithTag(searchField, 'input');
  });

  describe('clicking the magnifier icon', function() {
    it('inits a search when the query is new or has changed since the last search', function() {
      var icon = TestUtils.findRenderedDOMComponentWithTag(searchField, 'svg');
      searchField.props.query = 'css';
      React.findDOMNode(input).value = 'css3';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).toBeCalled();
    });

    it('prevents a search when the query param has not changed', function() {
      var icon = TestUtils.findRenderedDOMComponentWithTag(searchField, 'svg');
      searchField.props.query = 'css3';
      React.findDOMNode(input).value = 'css3';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).not.toBeCalled();
    });

    it('prevents a search when the query param is empty', function() {
      var icon = TestUtils.findRenderedDOMComponentWithTag(searchField, 'svg');
      React.findDOMNode(input).value = '';

      TestUtils.Simulate.click(icon);
      expect(onUserActionCallback).not.toBeCalled();
    });
  });

  describe('pressing the enter key', function() {
    it('inits a search when the query is new or has changed since the last search', function() {
      var icon = TestUtils.findRenderedDOMComponentWithTag(searchField, 'svg');
      searchField.props.query = 'css';
      React.findDOMNode(input).value = 'css3';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).toBeCalled();
    });

    it('prevents a search when the query param has not changed', function() {
      var icon = TestUtils.findRenderedDOMComponentWithTag(searchField, 'svg');
      searchField.props.query = 'css3';
      React.findDOMNode(input).value = 'css3';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).not.toBeCalled();
    });

    it('prevents a search when the query param is empty', function() {
      var icon = TestUtils.findRenderedDOMComponentWithTag(searchField, 'svg');
      React.findDOMNode(input).value = '';

      TestUtils.Simulate.keyPress(input, {keyCode: 13});
      expect(onUserActionCallback).not.toBeCalled();
    });
  });
});

