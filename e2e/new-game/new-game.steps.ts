import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^player has navigated to the game page$/, () => {});

    When(/^initial page load has completed$/, () => {});

    Then(/^score should be (\d+)$/, (expectedScore: number) => {});

    Then(/^an empty playing field of (\d+) by (\d+) tiles should be visible$/, (expectedTilesX: number, expectedTilesY: number) => {});

    Then(/^(\d+) tiles should be added at random to the playing field$/, (expectedTiles: number) => {});

    When(/^player has clicked \'New game\' button$/, () => {});

    Then(/^playing field should be cleared$/, () => {});

    Then(/^score should be reset to (\d+)$/, (expectedScore: number) => {});

    Given(/^game is over$/, () => {});

    When(/^player has clicked \'Try again\' button$/, () => {});
});
