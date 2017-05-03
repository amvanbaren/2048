const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class GameWonSteps {

    @when(/^there is a tile with value (\d+) present on the playing field$/)
    private whenThereIsATileWithValueXPresentOnThePlayingField (
        expectedTileValue: number, 
        callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^playing field should become greyed out$/)
    private thenPlayingFieldShouldBecomeGreyedOut (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^on top of the playing field \'You win!\' should be displayed$/)
    private thenOnTopOfThePlayingFieldYouWinShouldBeDisplayed (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^below the \'You win!\' text a \'New game\' button should be displayed$/)
    private thenBelowTheYouWinTextANewGameButtonShouldBeDisplayed (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }
}