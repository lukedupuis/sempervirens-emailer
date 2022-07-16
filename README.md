# Sempervirens Emailer
A wrapper for Nodemailer, it provides a simplified interface for sending emails.

![Tests badge](https://github.com/lukedupuis/sempervirens-emailer/actions/workflows/main.yml/badge.svg?event=push) ![Version badge](https://img.shields.io/static/v1?label=Node&labelColor=30363c&message=16.x&color=blue)

## Features

- _Checks if the `body` parameter is HTML or plain text, and if plain text, it adds the plain text to the email in case the recipient client is not HTML compatible._
- Enables creating an Emailer instance that can be pre-configured and used across the process.
- Enables calling only `send` without pre-configuring.
- Provides Gmail as the default service.

## Installation

`npm i @sempervirens/emailer`

## Usage

### Quick Start

1. Setup a Gmail account with an app password.

2. Import `Emailer`.

3. (Optional) Initialize `emailer` with `name`, `from`, and `password` so those parameters may be omitted when calling `send`.

4. Call send, with or without `name`, `from`, and `password`.

_Note: If initialized, it is only necessary to pass `name`, `from`, and `password` into `emailer` once. Then importing `emailer` anywhere else, it is only necessary to call `send`._

```
import emailer from '@sempervirens/emailer';

(async () => {

  // Without initializing

  const data1 = await Emailer.send({
    name: 'From name',
    from: 'From email',
    password: 'Gmail app password',
    to: 'To email',
    subject: 'Email subject',
    body: 'Email text or HTML'
  });

  // With initializing

  const emailer = new Emailer({
    name: 'From name',
    from: 'From email',
    password: 'Gmail app password'
  });

  // In a file somewhere else
  const data2 = await emailer.send({
    to: 'To email',
    subject: 'Email subject',
    body: 'Email text or HTML'
  });

})();
```

### Advanced

<p>In addition to a simplified quick start API, `@sempervirens/emailer` accepts an `options` object, which correspond to the <a href="https://nodemailer.com/smtp/" target="_blank">Nodemailer transport options</a>. The Nodemailer options can be passed either directly into the `send` function, or preconfigured on an `Emailer` instance by passing them into the `Emailer` constructor.<p>

```
const data3 = await Emailer.send({
  options: {
    service: 'gmail',
    auth: {
      user: 'From email',
      auth: 'Gmail app password'
    }
  },
  to: 'To email',
  subject: 'Email subject',
  body: 'Email text or HTML'
});
```

## API

### constructor

| Param  | Type | Description |
|--------|------|-------------|
| `name` | string | Required if `options` not given. From name to be displayed with from email. |
| `from` | string | Required if `options` not given. From email. |
| `password` | string | Required if `options` not given. From email password or app password. |
| `options` | object | Required if `name`, `from`, `password` not given. Nodemailer options. |

### send (static or instance)

_Note: If using the static function, `name`, `from`, `password`, etc. are required._

| Param  | Type | Description |
|--------|------|-------------|
| `name` | string | Required if static and `options` not given. From name to be displayed with from email. |
| `from` | string | Required if static and `options` not given. From email. |
| `password` | string | Required if static and `options` not given. From email password or app password. |
| `options` | object | Required if static and `name`, `from`, `password` not given. Nodemailer options. |
| `to` | string | Required. The to email address. |
| `subject` | string | Recommended. The email subject.
| `body` | string | Recommended. HTML or plain text email body.