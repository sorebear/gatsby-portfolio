const nodemailer = require('nodemailer');

exports.handler = (event, context, callback) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'sorenbaird@gmail.com',
      clientId: '55184836945-qt5tdklhmnjankd8451np0op1pc3qfap.apps.googleusercontent.com',
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: '1/G7nFIot0Vge-Rwx_53E6GBqxCKNUw7ZldqMww_WY27Tu7jjpMuIVaGwoqEghYJk5',
    },
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
      console.log(error);
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
