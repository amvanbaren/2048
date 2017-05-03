const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class GameOverSteps {

    @when(/^there are no possible moves left$/)
    private whenThereAreNoPossibleMovesLeft (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^playing field should become greyed out$/)
    private thenPlayingFieldShouldBecomeGreyedOut (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^on top of the playing field \'Game over!\' should be displayed$/)
    private thenOnTopOfThePlayingFieldGameOverShouldBeDisplayed (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^below the \'Game over!\' text a \'Try again\' button should be displayed$/)
    private thenBelowTheGameOverTextATryAgainButtonShouldBeDisplayed (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }
}