import send from './send.js';

class Emailer {

  #name;
  #from;
  #password;
  #options;
  #defaults;

  constructor({
    name,
    from,
    password,
    options,
    defaults
  } = {}) {
    this.#name = name;
    this.#from = from;
    this.#password = password;
    this.#options = options;
    this.#defaults = defaults;
  }

  async send({
    name = this.#name,
    from = this.#from,
    password = this.#password,
    options = this.#options,
    defaults = this.#defaults,
    to = '',
    subject = '',
    body = ''
  }) {
    return send({
      name,
      from,
      password,
      options,
      defaults,
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
