import send from './send.js';

class Emailer {

  #name;
  #from;
  #password;
  #options;

  constructor({
    name,
    from,
    password,
    options
  } = {}) {
    this.#name = name;
    this.#from = from;
    this.#password = password;
    this.#options = options;
  }

  async send({
    name = this.#name,
    from = this.#from,
    password = this.#password,
    options = this.#options,
    to = '',
    subject = '',
    body = ''
  }) {
    return send({
      name,
      from,
      password,
      options,
      to,
      subject,
      body
    });
  }

  static send(data) {
    return send(data);
  }

}

export default Emailer;
