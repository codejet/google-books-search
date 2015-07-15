const React = require('react');
const Styles = require('./styles.js');

class SearchField extends React.Component {
  handleUserAction() {
    const query = React.findDOMNode(this.refs.queryInput).value;

    if (query && query !== this.props.query) {
      this.props.onUserAction(query);
    }
  }

  handleKeyPress(e) {
    if (e.which == 13 || e.keyCode == 13) {
      this.handleUserAction();
    }
  }

  render() {
    return (
      <div style={Styles.wrapper}>
        <label style={Styles.label} htmlFor="search">Search Terms</label>
        <input
          ref="queryInput"
          style={Styles.input}
          id="search"
          autoComplete="off"
          type="search"
          placeholder="Enter searchterm here"
          aria-label="Enter searchterm here"
          onKeyPress={this.handleKeyPress.bind(this)} />
        <svg
          ref="searchIcon"
          onClick={this.handleUserAction.bind(this)}
          style={Styles.icon}
          viewBox="0 0 24 24"
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet">
          <g>
            <path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path>
          </g>
        </svg>
      </div>
    );
  }
}

module.exports = SearchField;
