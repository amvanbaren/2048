import { browser, by } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
    const gamePage = new GamePage();
    const validateMove = (tiles: any[], callback: CallbackStepDefinition) => {
        gamePage.getPlayingField().getWebElement().findElements(by.css('.tile')).then((e) => {
            const promises = [];

            tiles.forEach((item) => {
                const promise = e[item.index].getAttribute('tile').then((a) => {
                    expect(a).to.be.equal(item.value);
                });

                promises.push(promise);
            });

            Promise.all(promises).then(() => {
                callback();
            });
        });
    };

    Given(/^there are possible moves left$/, (callback: CallbackStepDefinition) => {
        const tiles = [
            [0, 0, 0, 0],
            [0, 2, 8, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];

        gamePage.setPlayingField(tiles).then(() => {
            callback()
        });
    });

    When(/^player presses the \'up\' arrow key$/, (callback: CallbackStepDefinition) => {
        gamePage.moveUp().then(() => {
            callback();
        });
    });

    Then(/^all tiles on the playing field should move up$/, (callback: CallbackStepDefinition) => {
        // expected playing field:
        // [
        //  [0,2,8,0],
        //  [0,0,0,0],
        //  [0,0,0,0],
        //  [0,0,0,0]
        // ]
        const tiles = [
            { index: 1, value: '2' },
            { index: 2, value: '8' }
        ];

        validateMove(tiles, callback);
    });

    When(/^player presses the \'down\' arrow key$/, (callback: CallbackStepDefinition) => {
        gamePage.moveDown().then(() => {
            callback();
        });
    });

    Then(/^all tiles on the playing field should move down$/, (callback: CallbackStepDefinition) => {
        // expected playing field:
        // [
        //  [0,0,0,0],
        //  [0,0,0,0],
        //  [0,0,0,0],
        //  [0,2,8,0]
        // ]
        const tiles = [
            { index: 13, value: '2' },
            { index: 14, value: '8' }
        ];

        validateMove(tiles, callback);
     });

    When(/^player presses the \'left\' arrow key$/, (callback: CallbackStepDefinition) => {
        gamePage.moveLeft().then(() => {
            callback();
        });
    });

    Then(/^all tiles on the playing field should move left$/, (callback: CallbackStepDefinition) => {
        // expected playing field:
        // [
        //  [0,0,0,0],
        //  [2,8,0,0],
        //  [0,0,0,0],
        //  [0,0,0,0]
        // ]
        const tiles = [
            { index: 4, value: '2' },
            { index: 5, value: '8' }
        ];

        validateMove(tiles, callback);
    });

    When(/^player presses the \'right\' arrow key$/, (callback: CallbackStepDefinition) => {
        gamePage.moveRight().then(() => {
            callback();
        });
    });

    Then(/^all tiles on the playing field should move right$/, (callback: CallbackStepDefinition) => { 
        // expected playing field:
        // [
        //  [0,0,0,0],
        //  [0,0,2,8],
        //  [0,0,0,0],
        //  [0,0,0,0]
        // ]
        const tiles = [
            { index: 6, value: '2' },
            { index: 7, value: '8' }
        ];

        validateMove(tiles, callback);
    });
});
