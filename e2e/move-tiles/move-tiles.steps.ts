const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class MoveTilesSteps {

    @given(/^there are possible moves left$/)
    private givenThereArePossibleMovesLeft (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^player presses the \'up\' arrow key$/)
    private whenPlayerPressesTheUpArrowKey (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^all tiles on the playing field should move up$/)
    private thenAllTilesOnThePlayingFieldShouldMoveUp (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^player presses the \'down\' arrow key$/)
    private whenPlayerPressesTheDownArrowKey (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^all tiles on the playing field should move down$/)
    private thenAllTilesOnThePlayingFieldShouldMoveDown (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^player presses the \'left\' arrow key$/)
    private whenPlayerPressesTheLeftArrowKey (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^all tiles on the playing field should move left$/)
    private thenAllTilesOnThePlayingFieldShouldMoveLeft (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^player presses the \'right\' arrow key$/)
    private whenPlayerPressesTheRightArrowKey (callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^all tiles on the playing field should move right$/)
    private thenAllTilesOnThePlayingFieldShouldMoveRight(callback) {
        // Write code here that turns the phrase above into concrete actions
    }
}