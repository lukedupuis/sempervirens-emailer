import nodemailer from 'nodemailer';
import { convert } from 'html-to-text';

import isHtml from './isHtml.js';

const send = async ({
  name = '',
  from = '',
  password = '',
  subject = '',
  to = '',
  body = '',
  options
}) => {

  const transportParams = [];

  if (options) {
    transportParams.push(options);
  } else {
    transportParams.push({
      service: 'gmail',
      auth: {
        user: from,
        pass: password
      }
    });
  }

  let text, html;
  if (isHtml(body)) {
    text = convert(body);
    html = body;
  } else {
    text = body;
  }

  const data = await nodemailer
    .createTransport(...transportParams)
    .sendMail({
      from: `${name} <${from}>`,
      to,
      subject,
      text,
      html
    });

  if (!data.response.includes('250')) {
    throw new Error([
      'Email response data contained a non-success code. ',
      `Response: ${data.response}`
    ].join(''));
  }

  return data;
};

export default send;