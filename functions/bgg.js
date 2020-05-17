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

exports.handler = async (event, context, callback) => {
  const { httpMethod, queryStringParameters } = event;

  if (httpMethod !== 'GET') {
    return callback(null, {
      statusCode: 500,
      body: 'Please supply a GET request',
    });
  }

  if (queryStringParameters.key !== process.env.BGG_API_KEY) {
    return callback(null, {
      statusCode: 403,
      body: 'Incorrect key.',
    });
  }

  const response = [];

  const processResponse = (data) => {
    const $ = cheerio.load(data);

    $('table#collectionitems tr:not(:first-child)').each((index, element) => {
      const item = {};

      checkForText($, item, 'thumbnail', element, '.collection_thumbnail img', 'src');

      const link = $(element).find('.collection_objectname a');
      item.name = link.text();
      // eslint-disable-next-line prefer-destructuring
      item.id = link[0].attribs.href.split('/')[2];

      const rank = $(element).find('.collection_rank').text().trim();
      item.rank = parseInt(rank, 10);

      const yearpublished = $(element).find('.collection_objectname span.smallerfont').text();
      item.yearpublished = parseInt(yearpublished.replace(/\(|\)/g, ''), 10);

      $(element).find('.collection_bggrating').each((ratingIndex, rating) => {
        switch (ratingIndex) {
          case 0:
            item.bggrating = parseFloat($(rating).text().trim());
            break;
          case 1:
            item.averagerating = parseFloat($(rating).text().trim());
            break;
          case 2:
            item.numvoters = parseInt($(rating).text().trim(), 10);
            break;
          default:
            break;
        }
      });

      response.push(item);
    });
  };

  try {
    const top1to100 = await axios.get('https://www.boardgamegeek.com/browse/boardgame');
    processResponse(top1to100.data);

    const top101to200 = await axios.get('https://www.boardgamegeek.com/browse/boardgame/page/2');
    processResponse(top101to200.data);

    const top201to300 = await axios.get('https://www.boardgamegeek.com/browse/boardgame/page/3');
    processResponse(top201to300.data);

    return callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(response),
    });
  } catch (err) {
    const responseBody = err.response && err.response.statusText ? err.response.statusText : 'Unknown Error';
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(responseBody),
    });
  }
};
