# Sempervirens Emailer
A wrapper for Nodemailer, it provides a simplified interface for sending emails.

![Tests badge](https://github.com/lukedupuis/sempervirens-emailer/actions/workflows/main.yml/badge.svg?event=push) ![Version badge](https://img.shields.io/static/v1?label=Node&labelColor=30363c&message=16.x&color=blue)

_Note: Currently only supports Gmail and plain text._

## Installation

`npm i @sempervirens/emailer`

## Usage

1. Setup a Gmail account with an app password.

2. Import `emailer`.

3. (Optional) Initialize `emailer` with `name`, `from`, and `password` so those parameters may be omitted when calling `send`.

4. Call send, with or without `name`, `from`, and `password`.

_Note: If initialized, it is only necessary to pass `name`, `from`, and `password` into `emailer` once. Then importing `emailer` anywhere else, it is only necessary to call `send`._

```
import emailer from '@sempervirens/emailer';

(async () => {

  // Without initializing

  const data = await emailer.send({
    name: 'From name',
    from: 'From email',
    password: 'Gmail app password',
    to: 'To email',
    subject: 'Email subject',
    text: 'Email text'
  });

  // With initializing

  emailer.init({
    name: 'From name',
    from: 'From email',
    password: 'Gmail app password'
  });

  // In a file somewhere else
  const data = await emailer.send({
    to: 'To email',
    subject: 'Email subject',
    text: 'Email text'
  });

})();
```