import React from 'react';
import PropTypes from 'prop-types';

const ArticleTeaser = ({ activeIndex, article, fetchArticle, index }) => (
  <button
    onClick={() => fetchArticle(article.link, index)}
    className={`article-teaser ${activeIndex === index ? 'active' : ''}`}
  >
    {article.fly && (
      <small className="article-teaser__section">
        {article.fly}
      </small>
    )}
    <h4 className="article-teaser__title">
      {article.title}
    </h4>
    {article.description && (
      <p className="article-teaser__description">
        {article.description}
      </p>
    )}
  </button>
);

export default ArticleTeaser;

ArticleTeaser.propTypes = {
  activeIndex: PropTypes.number,
  article: PropTypes.shape({
    fly: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  fetchArticle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

ArticleTeaser.defaultProps = {
  activeIndex: null,
};

