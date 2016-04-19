import React from 'react';
import qwest from 'qwest';
import CSSModules from 'react-css-modules';
import styles from '../css/google-books-search.css';
import SearchField from './search-field.jsx';
import Items from './items.jsx';

export class GoogleBooksSearch extends React.Component {
  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this);
    this.state = {data: []};
  }

  componentDidMount() {
    const query = this.props.query;

    if (query) {
      this.doSearch(query);
    }
  }

  doSearch(query) {
    const { maxResults, orderBy } = this.props;

    qwest
      .get('https://www.googleapis.com/books/v1/volumes', {
        "q": query,
        "maxResults": maxResults,
        "orderBy": orderBy,
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
    const { props, state } = this;
    const { subtitleMaxLength, snippetMaxLength } = props;
    const { query, data } = state;

    return (
      <div styleName='google-books-search'>
        <SearchField query={query} onUserAction={this.doSearch} />
        <Items subtitleMaxLength={subtitleMaxLength} snippetMaxLength={snippetMaxLength} data={data} />
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

export default CSSModules(GoogleBooksSearch, styles);
