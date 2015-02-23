var React = require('react');
var Styles = require('./styles.js');

class Items extends React.Component {
  formatAuthorsList(authors) {
    return authors.join(', ');
  }

  truncateString(string, length) {
    return string.length > length ? string.substr(0, length) + '...' : string;
  }

  truncateSubtitle(subtitle) {
    return this.truncateString(subtitle, this.props.subtitleMaxLength);
  }

  truncateSnippet(snippet) {
    return this.truncateString(snippet, this.props.snippetMaxLength);
  }

  extractPubDateYear(date) {
    return date.length > 4 ? date.split('-')[0] : date;
  }

  render() {
    var itemNodes = this.props.data.map((item, index) => {
      return (
        <li key={`item${index}`}>
          <article>
            <h1 style={Styles.item.title}>
              <a href={item.volumeInfo.previewLink} target="_blank" style={Styles.item.previewLink}>
                {item.volumeInfo.title}{item.volumeInfo.subtitle ? ': ' + this.truncateSubtitle(item.volumeInfo.subtitle) : ''}
              </a>
            </h1>
            <div style={Styles.item.info}>{this.formatAuthorsList(item.volumeInfo.authors)} {item.volumeInfo.publishedDate ? ' - ' + this.extractPubDateYear(item.volumeInfo.publishedDate) : ''}</div>
            <div style={Styles.item.details}>
              <div style={Styles.item.cover}>
                <a href={item.volumeInfo.previewLink} target="_blank">
                  <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} height="80" />
                </a>
              </div>
              <div style={Styles.item.snippet} dangerouslySetInnerHTML={{__html: item.searchInfo ? this.truncateSnippet(item.searchInfo.textSnippet) : ''}} />
            </div>
            <div style={Styles.item.detailsClear} />
          </article>
        </li>
      );
    });

    return (
      <ul style={Styles.items}>
        {itemNodes}
      </ul>
    );
  }
}

module.exports = Items;
