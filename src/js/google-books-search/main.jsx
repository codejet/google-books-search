const React = require('react');
const qwest = require('qwest');

const SearchField = require('../search-field/main.jsx');
const Items = require('../items/main.jsx');
const Styles = require('./styles.js');

class GoogleBooksSearch extends React.Component {
  constructor() {
    super()
    this.state = {data: []};
  }

  componentDidMount() {
    const query = this.props.query;

    if (query) {
      this.doSearch(query);
    }
  }

  doSearch(query) {
    qwest
      .get('https://www.googleapis.com/books/v1/volumes', {
        "q": query,
        "maxResults": this.props.maxResults,
        "orderBy":  this.props.orderBy,
        "fields": "items(volumeInfo/title,volumeInfo/previewLink,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/publishedDate,volumeInfo/imageLinks/smallThumbnail,searchInfo/textSnippet)"
      })
      .then(response => {
        this.setState({
          query: query,
          data: response.items
        });
      })
      .catch(message => {
        console.log(`Error: ${message}`);
      });
  }

  render() {
    return (
      <div style={Styles.host}>
        <SearchField query={this.state.query} onUserAction={this.doSearch.bind(this)} />
        <Items subtitleMaxLength={this.props.subtitleMaxLength} snippetMaxLength={this.props.snippetMaxLength} data={this.state.data} />
      </div>
    );
  }
}

GoogleBooksSearch.defaultProps = {
  query: '',
  maxResults: '5',
  orderBy: 'relevance',
  subtitleMaxLength: '75',
  snippetMaxLength: '250'
}

module.exports = GoogleBooksSearch;
