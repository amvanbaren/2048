import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^the player started a move$/, () => {});

    When(/^two tiles with the same value collide during a move$/, () => {});

    Then(/^the two tiles should be merged into one tile$/, () => {});

    Then(/^the merged tile value should be the sum of the two collided tile values$/, () => {});

    Then(/^the score should be incremented by the value of the merged tile$/, () => {});
});
