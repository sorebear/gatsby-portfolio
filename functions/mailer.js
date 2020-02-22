const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const auth = {
    type: 'OAuth2',
    user: 'sorenbaird@gmail.com',
    clientId: '591711810893-klfh0ukhj1ivhpeppqcq0h74jv82lkll.apps.googleusercontent.com',
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth,
  });

  const body = JSON.parse(event.body);
  const mailOptions = {
    to: 'soren@sorenbaird.com',
    subject: `New Message from ${body.name}`,
    html: `<p><strong>SENDER NAME:</strong> ${body.name}</p>
          <p><strong>SENDER EMAIL:</strong> ${body.email}</p>
          <p><strong>SENDER MESSAGE:</strong> ${body.message}</p>`,
    text: `SENDER NAME: ${body.name}, SENDER EMAIL: ${body.email}, SENDER MESSAGE: ${body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('[auth]', auth);
      console.log('[mailOptions]', mailOptions);
      console.log('[error]', error);
      console.log('[info]', info);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      });
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(info.response),
      });
    }
  });
};
