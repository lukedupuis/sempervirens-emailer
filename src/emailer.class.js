import send from './send.js';

class Emailer {

  #name;
  #from;
  #password;

  constructor({
    name,
    from,
    password
  } = {}) {
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
    return send({
      name,
      from,
      password,
      to,
      subject,
      text
    });
  }

  static send(data) {
    return send(data);
  }

}

export default Emailer;
