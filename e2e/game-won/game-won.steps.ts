import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    When(/^there is a tile with value (\d+) present on the playing field$/, (expectedTileValue: number) => {

    });

    Then(/^a yellow overlay is displayed on top of the playing field$/, () => {

    });

    Then(/^on top of the playing field \'You win!\' should be displayed$/, () => {

    });

    Then(/^below the \'You win!\' text a \'New game\' button should be displayed$/, () => {

    });
});
