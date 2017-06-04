import { browser, by } from 'protractor';
import { defineSupportCode, CallbackStepDefinition } from 'cucumber';
import { GamePage } from '../game.page';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then }) => {
    const gamePage = new GamePage();

    Given(/^a playingfield: (.*)$/, (playingfield: string, callback: CallbackStepDefinition) => {
        const tiles = JSON.parse(playingfield);

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

    Given(/^the player moves left$/, (callback: CallbackStepDefinition) => {
        gamePage.moveLeft().then(() => {
            callback();
        });
    });

    Given(/^the player moves up$/, (callback: CallbackStepDefinition) => {
        gamePage.moveUp().then(() => {
            callback();
        });
    });

    Given(/^the player moves down$/, (callback: CallbackStepDefinition) => {
        gamePage.moveDown().then(() => {
            callback();
        });
    });

    Then(/^the value of the merged tile at index (\d+) should be (\d+)$/,
    (index: number, value: number, callback: CallbackStepDefinition) => {
        const selector = '.tile[tile="' + value + '"]';
        gamePage.getPlayingField().getWebElement().findElements(by.css('.tile')).then((tiles) => {
            tiles[index].getAttribute('tile').then((t) => {
                expect(Number.parseInt(t)).to.equal(value);
                callback();
            });
        });
    });

    Then(/^there shouldn\'t be any tiles with value (\d+) on the playingfield$/, (value: number, callback: CallbackStepDefinition) => {
        const selector = '.tile[tile="' + value + '"]';
        gamePage.getPlayingField().getWebElement().findElements(by.css(selector)).then((e) => {
            expect(e.length).to.equal(0);
            callback();
        });
    });

    Then(/^the score should be incremented by (\d+) as well$/, (value: number, callback: CallbackStepDefinition) => {
         gamePage.getScore().then((s) => {
             expect(s).to.be.equal(value);

             callback();
         });
    });

    Then(/^the original (\d+) tile at index (\d+) shouldn\'t be merged$/,
    (value: number, index: number, callback: CallbackStepDefinition) => {
        gamePage.getPlayingField().getWebElement().findElements(by.css('.tile')).then((tiles) => {
            tiles[index].getAttribute('tile').then((t) => {
                expect(Number.parseInt(t)).to.equal(value);
                callback();
            });
        });
    });
});
