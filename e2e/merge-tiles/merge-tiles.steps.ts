import { browser, by } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
    const gamePage = new GamePage();

    Given(/^a playingfield with 2 tiles of value (\d+) on the same row$/, (value: number, callback: CallbackStepDefinition) => {
        const tiles = [
            [0, 0, 0, 0],
            [value, 0, value, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        gamePage.setPlayingField(tiles).then(() => {
            callback();
        });
    });

    Given(/^the score is 0$/, (callback: CallbackStepDefinition) => {
        gamePage.setScore(0).then(() => {
            callback();
        });
    });

    Given(/^the player moves right$/, (callback: CallbackStepDefinition) => {
        gamePage.moveRight().then(() => {
            callback();
        });
    });

    Then(/^the 2 tiles should be merged into 1 tile$/, (callback: CallbackStepDefinition) => {
        gamePage.getPlayingField().getWebElement().findElements(by.css('.tile > p')).then((e) => {
            // one merged tile and a newly spawned tile
            expect(e.length).to.be.equal(2);

            callback();
        });
    });

    Then(/^the merged tile value should be (\d+)$/, function (value: number, callback: CallbackStepDefinition) {
        const selector = '.tile[tile="' + value + '"]';
        gamePage.getPlayingField().getWebElement().findElements(by.css(selector)).then((e) => {
            expect(e.length).to.be.equal(1);

            callback();
        });
    });

    Then(/^the score should be incremented by (\d+) as well$/, (value: number, callback: CallbackStepDefinition) => {
         gamePage.getScore().then((s) => {
             expect(s).to.be.equal(value);

             callback();
         });
    });
});
