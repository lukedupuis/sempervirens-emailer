import nodemailer from 'nodemailer';

class Emailer {

  #name;
  #from;
  #password;

  constructor() {}

  init({
    name,
    from,
    password
  }) {
    this.#name = name;
    this.#from = from;
    this.#password = password;
  }

  async send({
    name = this.#name,
    from = this.#from,
    password = this.#password,
    to = '',
    subject = '',
    text = ''
  }) {

    if (!name) {
      throw new Error('"name" is required. It may be set for all requests by calling "init".');
    } else if (!from) {
      throw new Error('"from" is required. It may be set for all requests by calling "init".');
    } else if (!password) {
      throw new Error('"password" is required. It may be set for all requests by calling "init".');
    } else if (!to) {
      throw new Error('"to" is required.');
    } else if (!text) {
      throw new Error('"text" is required.');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: from,
        pass: password
      }
    });

    const data = await transporter.sendMail({
      from: `${name} <${from}>`,
      to,
      subject,
      text
    });

    if (!data.response.includes('250')) {
      throw new Error([
        'Email response data contained a non-success code. ',
        `Response: ${data.response}`
      ].join(''));
    }

    return data;

  }

}

export default new Emailer();
