import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    Given(/^there is an empty tile on the playing field$/, () => {

    });

    When(/^a player move has ended$/, () => {

    });

    Then(/^a new tile is added at random to an empty tile on the playing field$/, () => {

    });

    Then(/^the new tile's value is either (\d+) or (\d+)$/, (expectedTileValue1: number, expectedTileValue2: number) => {

    });
});
