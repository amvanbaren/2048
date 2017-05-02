const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class NewGameSteps {

    @when(/^initial page load has completed$/)
    private whenInitialPageLoadHasCompleted (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^score should be {int}$/)
    private thenScoreShouldBeZero (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^an empty playing field of {int} by {int} tiles should be visible$/)
    private thenAnEmptyPlayingFieldOf4By4TilesShouldBeVisible (int, int2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
    
    @then(/^{int} tiles should be added at random to the playing field$/)
    private then2TilesShouldBeAddedAtRandomToThePlayingField (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @when(/^player has clicked \'New game\' button$/)
    private whenPlayerHasClickedNewGameButton (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^playing field should be cleared$/)
    private thenPlayingFieldShouldBeCleared (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
    
    @then(/^score should be reset to {int}$/)
    private thenScoreShouldBeResetToZero (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @given(/^game is over$/)
    private giveGameIsOver (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @when(/^player has clicked \'Try again\' button$/)
    private whenPlayerHasClickedTryAgainButton (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
}