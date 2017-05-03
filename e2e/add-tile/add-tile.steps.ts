const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class AddTileSteps {

    @given(/^there is an empty tile on the playing field$/)
    private givenThereIsAnEmptyTileOnThePlayingField (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @when(/^a player move has ended$/)
    private whenAPlayerMoveHasEnded (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^a new tile is added at random to an empty tile on the playing field$/)
    private thenANewTileIsAddedAtRandomToAnEmptyTileOnThePlayingField (callback: CallbackStepDefinition) {
        // Write code here that turns the phrase above into concrete actions
    }

    @then(/^the new tile's value is either (\d+) or (\d+)$/)
    private thenTheNewTilesValueIsEitherXorY (
        expectedTileValue1: number,
        expectedTileValue2: number,
        callback: CallbackStepDefinition) {

        // Write code here that turns the phrase above into concrete actions
    }
}
