const cheerio = require('cheerio');
const axios = require('axios');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

function checkForText($, response, property, parent, query, attribute) {
  if ($(parent).find(query).length) {
    if (attribute) {
      response[property] = $(parent).find(query)[0].attribs[attribute];
    } else {
      response[property] = $(parent).find(query).text();
    }
  }
}

/**
 *
 * @param {function} callback
 * @param {object} $
 */
function getHomepage(callback, $) {
  const response = [];
  $('div.teaser').each((index, element) => {
    response[index] = {};
    response[index].number = index + 1;
    checkForText($, response[index], 'link', element, 'a.headline-link', 'href');
    checkForText($, response[index], 'title', element, 'a.headline-link .teaser__headline');
    checkForText($, response[index], 'imageSrc', element, '.teaser__image img', 'src');
    checkForText($, response[index], 'description', element, '.teaser__description');
    checkForText($, response[index], 'fly', element, '.section-fly');
  });

  return callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify(response),
  });
}

/**
 *
 * @param {function} callback
 * @param {object} $
 */
function getPrintEdition(callback, $) {
  const response = {};
  response.coverImage = $('img.print-edition__cover-widget__image').attr('src');
  response.date = $('.print-edition__main-title-header__date').text();
  response.edition = $('.print-edition__main-title-header__edition').text();
  response.sections = [];

  // Get each category
  $('.print-edition__content ul.list > li.list__item').each((index, element) => {
    response.sections[index] = {};
    response.sections[index].links = [];
    checkForText($, response.sections[index], 'sectionTitle', element, '.list__title');

    // Get each article link within each category
    $(element).find($('a.list__link')).each((linkIndex, linkEl) => {
      response.sections[index].links[linkIndex] = {};
      response.sections[index].links[linkIndex].link = $(linkEl).attr('href');
      checkForText($, response.sections[index].links[linkIndex], 'flyTitle', linkEl, '.print-edition__link-flytitle');
      checkForText($, response.sections[index].links[linkIndex], 'title', linkEl, '.print-edition__link-title');
      checkForText($, response.sections[index].links[linkIndex], 'titleSub', linkEl, '.print-edition__link-title-sub');
    });
  });

  return callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify(response),
  });
}

/**
 *
 * @param {function} callback
 * @param {object} $
 */
function getArticle(callback, $) {
  const response = [];
  response[0] = {};

  const article = $('main article');
  const articleHeader = $('article header.article__header');

  checkForText($, response[0], 'mainImage', article, '.article__lead-image img', 'src');
  checkForText($, response[0], 'subheadline', articleHeader, '.article__subheadline');
  checkForText($, response[0], 'headline', articleHeader, '.article__headline');
  checkForText($, response[0], 'description', articleHeader, '.article__description');
  checkForText($, response[0], 'date', article, '.article__dateline-datetime');
  checkForText($, response[0], 'footnote', article, '.article__footnote');
  checkForText($, response[0], 'section', article, '.article__section-headline a');

  if (!response[0].section) {
    checkForText($, response[0], 'section', article, '.article__section-headline');
  }

  response[0].body = [];

  $(article).find('.article__body-text').each((index, element) => {
    response[0].body[index] = $(element).text();
  });

  return callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify(response),
  });
}


exports.handler = (event, context, callback) => {
  const { httpMethod, queryStringParameters } = event;

  if (httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 500,
      body: 'Please supply a GET request',
    });
  }

  if (queryStringParameters.key !== process.env.ECONOMIST_API_KEY) {
    return callback(null, {
      statusCode: 403,
      body: 'Incorrect key.',
    });
  }

  axios.get(`https://economist.com${queryStringParameters.page}`).then((res) => {
    const $ = cheerio.load(res.data);

    switch (queryStringParameters.page) {
      case '/':
        return getHomepage(callback, $);
      case '/printedition':
        return getPrintEdition(callback, $);
      default:
        return getArticle(callback, $);
    }
  }).catch((err) => {
    const responseBody = err.response && err.response.statusText ? err.response.statusText : 'Unknown Error';
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(responseBody),
    });
  });

  return null;
};
