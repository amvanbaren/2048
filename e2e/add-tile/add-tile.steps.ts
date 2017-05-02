const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
export class AddTileSteps {

    @given(/^there is an empty tile on the playing field$/)
    private givenThereIsAnEmptyTileOnThePlayingField (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @when(/^a player move has ended$/)
    private whenAPlayerMoveHasEnded (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^a new tile is added at random to an empty tile on the playing field$/)
    private thenANewTileIsAddedAtRandomToAnEmptyTileOnThePlayingField (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^{int}% of the time the new tile\'s value is {int}$/) 
    private thenXNumberOfTheTimeTheNewTilesValueIsNumber (int, int2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }

    @then(/^{int}% of the time the new tile\'s value is {int}$/) 
    private thenYNumberOfTheTimeTheNewTilesValueIsNumber (int, int2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    }
}