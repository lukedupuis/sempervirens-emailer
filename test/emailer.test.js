import { expect } from 'chai';

import emailer from '../index.js';

describe('1. emailer', () => {

  describe('1.1. When "send" is called', () => {
    // return;

    describe('1.1.1. When required parameters are not given', () => {
      // return;
      it('1.1.1.1. Should throw an error', async () => {
        try {
          await emailer.send({
            name: '',
            from: 'test01@test.com',
            password: 'password',
            to: 'test02@test.com',
            subject: 'Test',
            text: 'Test'
          });
        } catch({ message }) {
          expect(message).to.include('"name" is required.');
        }
        try {
          await emailer.send({
            name: 'Test01',
            from: '',
            password: 'password',
            to: 'test02@test.com',
            subject: 'Test',
            text: 'Test'
          });
        } catch({ message }) {
          expect(message).to.include('"from" is required.');
        }
        try {
          await emailer.send({
            name: 'Test01',
            from: 'test01@test.com',
            password: '',
            to: 'test02@test.com',
            text: 'Test'
          });
        } catch({ message }) {
          expect(message).to.include('"password" is required.');
        }
        try {
          await emailer.send({
            name: 'Test01',
            from: 'test01@test.com',
            password: 'password',
            to: '',
            text: 'Test'
          });
        } catch({ message }) {
          expect(message).to.include('"to" is required.');
        }
        try {
          await emailer.send({
            name: 'Test01',
            from: 'test01@test.com',
            password: 'password',
            to: 'test02@test.com',
            text: ''
          });
        } catch({ message }) {
          expect(message).to.include('"text" is required.');
        }
      });
    });

    describe('1.1.2. When an error occurs in sending', () => {
      // return;
      it('1.1.2.1. Should throw an error', async () => {
        try {
          await emailer.send({
            name: 'Test 01',
            from: 'test01@test.com',
            password: 'password',
            to: 'test02@test.com',
            subject: 'Test',
            text: 'Test'
          });
        } catch (error) {
          expect(error).to.exist;
        }
      });
    });

    describe('1.1.3. When credentials are valid', () => {

      const from = 'test3793793@gmail.com';
      const password = '';

      describe('1.1.3.1. When not pre-initialized', () => {
        it('1.1.3.1.1. Should send an email', async () => {
          return;
          const { accepted } = await emailer.send({
            name: 'Test 01',
            from,
            password,
            to: from,
            subject: 'Test',
            text: 'Test'
          });
          expect(accepted).to.include(from);
        });
      });

      describe('1.1.3.2. When pre-initialized', () => {
        it('1.1.3.2.1. Should send an email', async () => {
          return;
          emailer.init({
            name: 'Test 01',
            from,
            password
          });
          const { accepted } = await emailer.send({
            to: from,
            subject: 'Test',
            text: 'Test'
          });
          expect(accepted).to.include(from);
        });
      });
    });

  });

});