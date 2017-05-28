import { browser, by } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
    const gamePage = new GamePage();

    Given(/^the playing field is empty$/, (callback: CallbackStepDefinition) => {
        const tiles = [
            [0, 0, 0, 0],
            [256, 0, 0, 0],
            [0, 0, 0, 128],
            [0, 0, 0, 0]
        ];

        gamePage.setPlayingField(tiles).then(() => {
            callback();
        });
    });

    When(/^a player move has ended$/, (callback: CallbackStepDefinition) => {
        gamePage.moveDown().then(() => {
            callback();
        });
    });

    Then(/^(\d+) tile should be added at random to the playing field$/, (expectedAddedTiles: number, callback: CallbackStepDefinition) => {
        gamePage.getPlayingField().getWebElement().findElements(by.css('.tile > p')).then((t) => {
            // playing field already had two tiles (128, 256)
            expect(t.length).to.be.equal(expectedAddedTiles + 2);

            callback();
        });
    });

    Then(/^the new tile's value is either (\d+) or (\d+)$/,
        (expectedTileValue1: number, expectedTileValue2: number, callback: CallbackStepDefinition) => {
            gamePage.getPlayingField().getWebElement().findElements(by.css('.tile[tile="2"],.tile[tile="4"]')).then((t) => {
                t[0].getText().then((v) => {
                    const value = Number.parseInt(v);
                    expect(value).to.satisfy((tileValue) => {
                        return tileValue === expectedTileValue1 || tileValue === expectedTileValue2;
                    });

                    callback();
                });
            });
        });
});
