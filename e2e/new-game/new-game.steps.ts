import { browser, by, promise, WebElement } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {
    const gamePage = new GamePage();

    Given(/^player has navigated to the game page$/, (callback: CallbackStepDefinition) => {
        gamePage.navigateTo()
                .then(callback);
    });

    Then(/^score should be (\d+)$/, (expectedScore: number, callback: CallbackStepDefinition) => {
        gamePage.getScore().then((s) => {
            expect(s).to.be.equal(expectedScore);
            callback();
        });
    });

    Then(/^best score should be (\d+)$/, function (expectedBestScore: number, callback: CallbackStepDefinition) {
         gamePage.getBestScore().then((b) => {
             expect(b).to.be.equal(expectedBestScore);
             callback();
         });
    });

    Then(/^an empty playing field of (\d+) by (\d+) tiles should be visible$/, 
        (expectedTilesX: number, expectedTilesY: number, callback: CallbackStepDefinition) => {

        gamePage.getPlayingField().then((p) => { 
            p.getWebElement().findElements(by.className('row')).then((r) => {
                expect(r.length).to.be.equal(expectedTilesY);

                const promises = [];
                r.forEach((i) => {
                    const promise = i.findElements(by.css('[class^=col-]')).then((c) => {
                        expect(c.length).to.be.equal(expectedTilesX);
                    });

                    promises.push(promise);
                });

                Promise.all(promises).then(() => {
                    callback();
                });
            });
        });
    });

    Then(/^(\d+) tiles should be added at random to the playing field$/,
        (expectedTiles: number, callback: CallbackStepDefinition) => {

        // TODO: test this multiple times to ensure the tiles are added at random to the playing field
        gamePage.getPlayingField().then((p) => {
                p.getWebElement().findElements(by.css('.tile > p')).then((t) => {
                expect(t.length).to.be.equal(expectedTiles);
                callback();
            });
        });
    });

    Given(/^best score is (\d+)$/, function (bestScore: number, callback: CallbackStepDefinition) {
         gamePage.setBestScore(bestScore)
            .then(callback);
    });

    Given(/^player made a move$/, (callback: CallbackStepDefinition) => {
        // hacky way to make sure that 
        // the player made at least one move
        gamePage.moveLeft().then(() => {
            gamePage.moveRight().then(() => {
                gamePage.moveUp().then(() => {
                    gamePage.moveDown().then(() => {
                        callback();
                    });
                });
            });
        });
    });

    When(/^player has clicked \'New game\' button$/, (callback: CallbackStepDefinition) => {
        gamePage.clickNewGame()
            .then(callback);
    });

    Given(/^game is over$/, () => {});

    When(/^player has clicked \'Try again\' button$/, () => {});
});
