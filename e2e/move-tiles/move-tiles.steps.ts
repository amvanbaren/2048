import { browser, by } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {
    const gamePage = new GamePage();

    Given(/^there are possible moves left$/, (callback: CallbackStepDefinition) => {
        gamePage.navigateTo()
                .then(callback);
    });

    When(/^player presses the \'up\' arrow key$/, () => {
        gamePage.moveUp();
    });

    Then(/^all tiles on the playing field should move up$/, () => {
        const playingField = gamePage.getPlayingField().getWebElement();

        playingField.findElements(by.css('.tile > p')).then((e) => {
            // after a move a new tile is added, that's why we do -1
            const expectedTopTiles = e.length - 1;

            gamePage.getPlayingField().getWebElement().findElements(by.className('row')).then((e) => {
                const top = e[0];
                top.findElements(by.css('.tile > p')).then((t) => {
                    expect(t.length).to.be.least(expectedTopTiles);
                });
            });
        });
    });

    When(/^player presses the \'down\' arrow key$/, () => {
        gamePage.moveDown();
    });

    Then(/^all tiles on the playing field should move down$/, () => {});

    When(/^player presses the \'left\' arrow key$/, () => {
        gamePage.moveLeft();
    });

    Then(/^all tiles on the playing field should move left$/, () => {});

    When(/^player presses the \'right\' arrow key$/, () => {
        gamePage.moveRight();
    });

    Then(/^all tiles on the playing field should move right$/, () => {});
});
