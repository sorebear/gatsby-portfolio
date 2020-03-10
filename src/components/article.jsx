import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
    };
  }

  componentDidMount() {
    this.getWordCount();
  }

  getWordCount() {
    const { article } = this.props;

    const wordCount = article.body.reduce((total, paragraph) => {
      const paragraphArr = paragraph.split(' ');
      return total + paragraphArr.length;
    }, 0);

    this.setState({ wordCount });
  }

  render() {
    const { wordCount } = this.state;
    const { article, textSize } = this.props;

    return (
      <div className="article">
        <div className="article__image-container">
          <img src={article.mainImage} alt="Banner" />
        </div>
        <small className="article__subheadline">
          {article.subheadline}
        </small>
        <h2 className="article__headline">{article.headline}</h2>
        <p className="article__date">
          <em>
            {article.date} | {Math.ceil(wordCount / 225)}min Read
          </em>
        </p>
        <div className="article__body">
          {article.body.map((paragraph, index) => (
            <p key={`paragraph-${index}`} style={{ fontSize: `${textSize}px` }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Article;

Article.propTypes = {
  article: PropTypes.shape({
    headline: PropTypes.string,
    date: PropTypes.string,
    mainImage: PropTypes.string,
    subheadline: PropTypes.string,
    paragraph: PropTypes.arrayOf([
      PropTypes.string,
    ]),
  }).isRequired,
  textSize: PropTypes.number.isRequired,
};
