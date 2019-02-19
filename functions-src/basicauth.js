const axios = require('axios');

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { username, password, url } = body;
  console.log('[Starting Function]');
  axios.get(url, {
    auth: { username, password },
  }).then((res) => {
    console.log('[Success]');
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data),
    });
  }).catch((err) => {
    console.log('[Error]', err);
    const responseBody = err.response && err.response.statusText ? err.response.statusText : 'Unknown Error';
    callback(null, {
      statusCode: err.response && err.response.status ? err.response.status : 500,
      body: JSON.stringify(responseBody),
    });
  });
};
