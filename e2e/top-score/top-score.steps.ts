const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class TopScoreSteps {

    @when(/^the current game score is higher than the top score$/)
    private whenTheCurrentGameScoreIsHigherThanTheTopScore (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^the top score value should become the current game score value$/)
    private thenTheTopScoreValueShouldBecomeTheCurrentGameScoreValue (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
}