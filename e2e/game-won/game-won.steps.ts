const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class GameWonSteps {

    @when(/^there is a tile with value {int} present on the playing field$/) 
    private whenThereIsATileWithValueXPresentOnThePlayingField (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^playing field should become greyed out$/) 
    private thenPlayingFieldShouldBecomeGreyedOut (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^on top of the playing field \'You win!\' should be displayed$/) 
    private thenOnTopOfThePlayingFieldYouWinShouldBeDisplayed (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^below the \'You win!\' text a \'New game\' button should be displayed$/) 
    private thenBelowTheYouWinTextANewGameButtonShouldBeDisplayed (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
}