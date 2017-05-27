import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({When, Then}) => {

    When(/^the current game score is higher than the top score$/, () => {});

    Then(/^the top score value should become the current game score value$/, () => {});
});

