const cheerio = require('cheerio');
const axios = require('axios');

exports.handler = (event, context, callback) => {
  const { httpMethod, queryStringParameters } = event;

  if (httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 500,
      body: 'Please supply a GET request',
    });
  }

  if (queryStringParameters.key !== 'boobookitty') {
    return callback(null, {
      statusCode: 403,
      body: 'Incorrect key.',
    });
  }

  axios.get(`https://economist.com${queryStringParameters.page}`).then((res) => {
    const $ = cheerio.load(res.data);
    const response = [];

    const checkForText = (index, property, parent, query, attribute) => {
      const element = $(parent).find(query);
      if (attribute) {
        console.log(element);
      }

      if ($(parent).find(query).length) {
        if (attribute) {
          response[index][property] = $(parent).find(query)[0].attribs[attribute];
        } else {
          response[index][property] = $(parent).find(query).text();
        }
      }
    };

    if (queryStringParameters.page === '/') {
      $('div.teaser').each((index, element) => {
        response[index] = {};
        response[index].number = index + 1;
        checkForText(index, 'link', element, 'a.headline-link', 'href');
        checkForText(index, 'title', element, 'a.headline-link .teaser__headline');
        checkForText(index, 'imageSrc', element, '.teaser__image img', 'src');
        checkForText(index, 'description', element, '.teaser__description');
        checkForText(index, 'fly', element, '.section-fly');
      });

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    }

    response[0] = {};

    const article = $('main article');
    const articleHeader = $('article header.article__header');

    checkForText(0, 'mainImage', article, '.article__lead-image img', 'src');
    checkForText(0, 'subheadline', articleHeader, '.article__subheadline');
    checkForText(0, 'headline', articleHeader, '.article__headline');
    checkForText(0, 'description', articleHeader, '.article__description');
    checkForText(0, 'date', article, '.article__dateline-datetime');
    checkForText(0, 'footnote', article, '.article__footnote');
    checkForText(0, 'section', article, '.article__section-headline a');

    if (response[0].section == null) {
      checkForText(0, 'section', article, '.article__section-headline');
    }

    response[0].body = [];

    $(article).find('.article__body-text').each((index, element) => {
      response[0].body[index] = $(element).text();
    });

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  }).catch((err) => {
    const responseBody = err.response && err.response.statusText ? err.response.statusText : 'Unknown Error';
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(responseBody),
    });
  });

  return null;
};
