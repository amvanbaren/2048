const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class MergeTilesSteps {

    @given(/^the player started a move$/)
    private givenThePlayerStartedAMove (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^two tiles with the same value collide during a move$/)
    private whenTwoTilesWithTheSameValueCollideDuringAMove (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^the two tiles should be merged into one tile$/)
    private thenTheTwoTilesShouldBeMergedIntoOneTile (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^the merged tile value should be the sum of the two collided tile values$/)
    private thenTheMergedTileValueShouldBeTheSumOfTheTwoCollidedTileValues (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^the score should be incremented by the value of the merged tile$/)
    private thenTheScoreShouldBeIncrementedByTheValueOfTheMergedTiles (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }
}