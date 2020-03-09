import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, textSize }) => (
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
        {article.date}
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
