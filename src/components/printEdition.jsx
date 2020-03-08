import React from 'react';
import PropTypes from 'prop-types';

const PrintEdition = ({ data, fetchArticle }) => (
  <div className="economist__print-edition">
    <div className="economist__print-edition--image">
      <img src={data.coverImage} alt={data.edition} />
    </div>
    <p className="economist__print-edition--date">{data.date}</p>
    {data.sections.map(section => (
      <div key={section.sectionTitle} className="economist__print-edition-section">
        <p className="economist__print-edition-section--title">{section.sectionTitle}</p>
        <div className="economist__print-edition-section--articles">
          {section.links.map((article, index) => (
            <button
              key={article.link}
              onClick={() => fetchArticle(article.link, index)}
              className="print-edition-article-teaser"
            >
              {article.flyTitle && <span className="print-edition-article-teaser__fly-title">{article.flyTitle}</span>}
              {article.title && <span className="print-edition-article-teaser__title">{article.title}</span>}
              {article.titleSub && <span className="print-edition-article-teaser__sub-title">{article.titleSub}</span>}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default PrintEdition;

PrintEdition.propTypes = {
  data: PropTypes.shape({
    coverImage: PropTypes.string,
    date: PropTypes.string,
    edition: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({
      sectionTitle: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape({
        flyTitle: PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string,
      })),
    })),
  }).isRequired,
  fetchArticle: PropTypes.func.isRequired,
};
