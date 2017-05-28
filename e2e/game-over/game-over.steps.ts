import { browser } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
    const gamePage = new GamePage();

    Given(/^there are no possible moves left$/, (callback: CallbackStepDefinition) => {
        const tiles = [
            [670, 702, 814, 228],
            [908, 321, 656, 943],
            [334, 555, 114, 427],
            [718, 328, 515, 888]
        ];

        gamePage.setPlayingField(tiles).then(() => {
            callback();
        });
    });

    When(/^user makes move$/, (callback: CallbackStepDefinition) => {
        gamePage.moveUp().then(() => {
            callback();
        });
    });

    Then(/^game over overlay is shown$/, (callback: CallbackStepDefinition) => {
        gamePage.getGameOver().getWebElement().then((g) => {
            expect(g).to.not.be.an('undefined');
            callback();
        });
    });
});
