const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class NewGameSteps {

    @when(/^initial page load has completed$/)
    private whenInitialPageLoadHasCompleted (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^score should be (\d+)$/)
    private thenScoreShouldBeZero (expectedScore: number, callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^an empty playing field of (\d+) by (\d+) tiles should be visible$/)
    private thenAnEmptyPlayingFieldOfXByYTilesShouldBeVisible (
        expectedTilesX: number,
        expectedTilesY: number,
        callback: CallbackStepDefinition) {

        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^(\d+) tiles should be added at random to the playing field$/)
    private thenXTilesShouldBeAddedAtRandomToThePlayingField (
        expectedNumberOfTiles: number,
        callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^player has clicked \'New game\' button$/)
    private whenPlayerHasClickedNewGameButton (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^playing field should be cleared$/)
    private thenPlayingFieldShouldBeCleared (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^score should be reset to (\d+)$/)
    private thenScoreShouldBeResetToX (expectedScore: number, callback) {
        // Write code here that turns the phrase above into concrete actions
    }

    @given(/^game is over$/)
    private giveGameIsOver (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^player has clicked \'Try again\' button$/)
    private whenPlayerHasClickedTryAgainButton (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }
}