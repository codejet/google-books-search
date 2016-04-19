import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/items.css';

export class Items extends React.Component {
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
      return (
        <li key={`item${index}`}>
          <article>
            <h1 styleName="item-title">
              <a href={item.volumeInfo.previewLink} target="_blank" styleName="item-preview-link">
                {item.volumeInfo.title}{item.volumeInfo.subtitle ? ': ' + this.truncateSubtitle(item.volumeInfo.subtitle) : ''}
              </a>
            </h1>
            <div styleName="item-info">
              {item.volumeInfo.authors ? this.formatAuthorsList(item.volumeInfo.authors) : ''}
              {item.volumeInfo.authors && item.volumeInfo.publishedDate ? ' - ' : ''}
              {item.volumeInfo.publishedDate ? this.extractPubDateYear(item.volumeInfo.publishedDate) : ''}
            </div>
            <div styleName="item-details">
              <div styleName="item-cover">
                <a href={item.volumeInfo.previewLink} target="_blank">
                  <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title} height="80" />
                </a>
              </div>
              <div styleName="item-snippet" dangerouslySetInnerHTML={{__html: item.searchInfo ? this.truncateSnippet(item.searchInfo.textSnippet) : ''}} />
            </div>
            <div styleName="item-details" />
          </article>
        </li>
      );
    });

    return (
      <ul styleName="items">
        {itemNodes}
      </ul>
    );
  }
}

export default CSSModules(Items, styles);
