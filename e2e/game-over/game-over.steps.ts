import { browser } from 'protractor';
import { defineSupportCode } from 'cucumber';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {

    When(/^there are no possible moves left$/, () => {

    });

    Then(/^playing field should become greyed out$/, () => {

    });

    Then(/^on top of the playing field \'Game over!\' should be displayed$/, () => {

    });

    Then(/^below the \'Game over!\' text a \'Try again\' button should be displayed$/, () => {
        
    });
});
