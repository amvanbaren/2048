import { browser } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
    const gamePage = new GamePage();

    Given(/^there are 2 tiles with value 1024 present on the playing field$/, (callback: CallbackStepDefinition) => {
        const tiles = [
            [0, 0, 0, 1024],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1024]
        ];

        gamePage.setPlayingField(tiles).then(() => {
            callback();
        });
    });

    When(/^the player merges the 2 1024 tiles$/, (callback: CallbackStepDefinition) => {
        gamePage.moveDown().then(() => {
            callback();
        });
    });

    Then(/^game won overlay is shown$/, (callback: CallbackStepDefinition) => {
        gamePage.getGameWon().getWebElement().then((g) => {
            expect(g).to.not.be.an('undefined');
            callback();
        });
    });
});
