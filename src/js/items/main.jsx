const React = require('react');
const Styles = require('./styles.js');

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
    const itemNodes = this.props.data.map((item, index) => {
      const { title, previewLink, info, details, cover, snippet, detailsClear } = Styles.item;

      return (
        <li key={`item${index}`}>
          <article>
            <h1 style={title}>
              <a href={item.volumeInfo.previewLink} target="_blank" style={previewLink}>
                {item.volumeInfo.title}{item.volumeInfo.subtitle ? ': ' + this.truncateSubtitle(item.volumeInfo.subtitle) : ''}
              </a>
            </h1>
            <div style={info}>
              {item.volumeInfo.authors ? this.formatAuthorsList(item.volumeInfo.authors) : ''}
              {item.volumeInfo.authors && item.volumeInfo.publishedDate ? ' - ' : ''}
              {item.volumeInfo.publishedDate ? this.extractPubDateYear(item.volumeInfo.publishedDate) : ''}
            </div>
            <div style={details}>
              <div style={cover}>
                <a href={item.volumeInfo.previewLink} target="_blank">
                  <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} height="80" />
                </a>
              </div>
              <div style={snippet} dangerouslySetInnerHTML={{__html: item.searchInfo ? this.truncateSnippet(item.searchInfo.textSnippet) : ''}} />
            </div>
            <div style={detailsClear} />
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
