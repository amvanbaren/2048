const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class MergeTilesSteps {

    @given(/^the player started a move$/) 
    private givenThePlayerStartedAMove (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @when(/^two tiles with the same value collide during a move$/) 
    private whenTwoTilesWithTheSameValueCollideDuringAMove (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^the two tiles should be merged into one tile$/) 
    private thenTheTwoTilesShouldBeMergedIntoOneTile (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^the merged tile value should be the sum of the two collided tile values$/) 
    private thenTheMergedTileValueShouldBeTheSumOfTheTwoCollidedTileValues (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^the score should be incremented by the value of the merged tile$/) 
    private thenTheScoreShouldBeIncrementedByTheValueOfTheMergedTiles (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
}