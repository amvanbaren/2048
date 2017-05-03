import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^there are possible moves left$/, () => {});

    When(/^player presses the \'up\' arrow key$/, () => {});

    Then(/^all tiles on the playing field should move up$/, () => {});

    When(/^player presses the \'down\' arrow key$/, () => {});

    Then(/^all tiles on the playing field should move down$/, () => {});

    When(/^player presses the \'left\' arrow key$/, () => {});

    Then(/^all tiles on the playing field should move left$/, () => {});

    When(/^player presses the \'right\' arrow key$/, () => {});

    Then(/^all tiles on the playing field should move right$/, () => {});
});
