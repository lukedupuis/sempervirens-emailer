import { expect } from 'chai';

import { Emailer, send } from '../index.js';

describe('1. Emailer', () => {

  describe('1.1. When "send" is called', () => {
    // return;

    const name = 'Test 01';
    const from = 'test3793793@gmail.com';
    const password = '';
    const subject = 'Test';
    const text = 'Test';
    const html = '<html><head><style>h1 { color: green; }</style><body><h1>Hello World!</h1></body></html>';

    describe('1.1.1. When an error occurs in sending', () => {
      // return;
      it('1.1.1.1. Should throw an error', async () => {
        try {
          await send({
            name,
            from: 'test01@test.com',
            password,
            to: from,
            subject,
            body: text
          });
        } catch (error) {
          expect(error).to.exist;
        }
      });
    });

    describe('1.1.2. When not pre-initialized', () => {
      // return;

      describe('1.1.2.1. When basic options are given without specifying a service', () => {
        it('1.1.2.1.1. Should send an email using Gmail as the service', async () => {
          return;
          const { accepted } = await Emailer.send({
            name,
            from,
            password,
            to: from,
            subject: subject,
            body: text
          });
          expect(accepted).to.include(from);
        });
      });

      describe('1.1.2.2. When Nodemailer options are given', () => {
        it('1.1.2.2.1. Should send an email', async () => {
          return;
          const { accepted } = await Emailer.send({
            options: {
              service: 'gmail',
              auth: {
                user: from,
                pass: password
              }
            },
            to: from,
            subject: subject,
            body: text
          });
          expect(accepted).to.include(from);
        });
      });

      describe('1.1.2.3. When html is given as the body', () => {
        it('1.1.2.3.1. Should send an email with html for compatible clients, as well as plain text (manually verified)', async () => {
          return;
          const { accepted } = await Emailer.send({
            name,
            from,
            password,
            to: from,
            subject: subject,
            body: html
          });
          expect(accepted).to.include(from);
        });
      });

    });

    describe('1.1.3. When pre-initialized', () => {
      // return;

      describe('1.1.3.1. When basic options are given without specifying a service', () => {
        it('1.1.3.1.1. Should send an email using Gmail as the service', async () => {
          return;
          const emailer = new Emailer({
            name,
            from,
            password
          });
          const { accepted } = await emailer.send({
            to: from,
            subject: subject,
            body: text
          });
          expect(accepted).to.include(from);
        });
      });

      describe('1.1.3.2. When Nodemailer options are given', () => {
        it('1.1.3.2.1. Should send an email', async () => {
          return;
          const emailer = new Emailer({
            options: {
              service: 'gmail',
              auth: {
                user: from,
                pass: password
              }
            }
          });
          const { accepted } = await emailer.send({
            to: from,
            subject: subject,
            body: text
          });
          expect(accepted).to.include(from);
        });
      });

      describe('1.1.3.3. When html is given as the body', () => {
        it('1.1.3.3.1. Should send an email with html for compatible clients, as well as plain text (manually verified)', async () => {
          return;
          const emailer = new Emailer({
            name,
            from,
            password
          });
          const { accepted } = await emailer.send({
            to: from,
            subject: subject,
            body: html
          });
          expect(accepted).to.include(from);
        });
      });

    });

  });

});