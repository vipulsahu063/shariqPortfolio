const mailgun = require('mailgun-js');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'your-domain.com';  // Replace with your Mailgun domain
const mg = mailgun({ apiKey: 'YOUR_API_KEY', domain: DOMAIN });

exports.handler = async function(event) {
  if (event.httpMethod === 'POST') {
    const { email } = JSON.parse(event.body);

    const data = {
      from: 'you@yourdomain.com',
      to: email,
      subject: 'Here is your book!',
      text: 'Thank you for requesting the book. Please find it attached.',
      attachment: new mg.Attachment({
        data: fs.createReadStream(path.join(__dirname, 'book.pdf')),
        filename: 'book.pdf',
        contentType: 'application/pdf',
      }),
    };

    try {
      const body = await mg.messages().send(data);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
};
