const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = async (event, context, callback) => {
  const baseUrl = 'https://www.boardgamegeek.com';
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

  try {
    const res = await axios.get(`${baseUrl}/boardgame/${queryStringParameters.id}`);
    const $ = cheerio.load(res.data);

    // const link = $('div.summary-media-grid-count a');
    const navTabs = $('nav.game-nav-tabs a[role="tab"]');
    // const href = baseUrl + link[0].attribs.href;
    // const href = $(link)[0].attribs['href'];

    $(navTabs).each((index, element) => {
      console.log(element);
      if ($(element).text().trim() === 'Images') {
        console.log('[IMAGES]');
        console.log(element);
      }
    });

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data),
    });
  } catch (err) {
    const responseBody = err.response && err.response.statusText ? err.response.statusText : 'Unknown Error';
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify(responseBody),
    });
  }
};
