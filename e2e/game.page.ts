import { browser, promise, element, by, until, protractor, ElementFinder} from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

export class GamePage {

    constructor(){}

    navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }

    clickNewGame(): promise.Promise<any> {
        return browser.findElement(by.id('new-game')).click();
    }

    clickTryAgain(): promise.Promise<any> {
        return browser.findElement(by.id('try-again')).click();
    }

    clickPlayAgain(): promise.Promise<any> {
        return browser.findElement(by.id('play-again')).click();
    }

    getScore(): promise.Promise<number> {
        return element(by.id('score')).getText().then(Number.parseInt);
    }

    setScore(score: number): promise.Promise<any> {
        return browser.executeScript(`
            var scoreBoard = document.getElementById('score-board');
            ng.probe(scoreBoard).componentInstance.score = ` + score + `;`
        );
    }

    getBestScore(): promise.Promise<number> {
        return element(by.id('best')).getText().then(Number.parseInt);
    }

    setBestScore(bestScore: number): promise.Promise<any> {
        return browser.executeScript(`
            var scoreBoard = document.getElementById('score-board');
            ng.probe(scoreBoard).componentInstance.best = ` + bestScore + `;`
        );
    }

    getPlayingField(): ElementFinder {
        return element(by.id('playing-field'))
    }

    setPlayingField(tiles: number[][]): promise.Promise<any> {
        return browser.executeScript(`
            var playingField = document.getElementById('playing-field');
            ng.probe(playingField).componentInstance.tiles = ` + JSON.stringify(tiles) + `;
        `);
    }

    getGameOver(): ElementFinder {
        try {
            return element(by.id('game-over'));
        } catch(exception) {
            return null;
        }
    }

    getGameWon(): ElementFinder {
        try {
            return element(by.id('game-won'));
        } catch(exception) {
            return null;
        }
    }

    moveUp() {
        return this.move(protractor.Key.ARROW_UP);
    }

    moveDown() {
        return this.move(protractor.Key.ARROW_DOWN);
    }

    moveLeft() {
        return this.move(protractor.Key.ARROW_LEFT);
    }

    moveRight() {
        return this.move(protractor.Key.ARROW_RIGHT);
    }

    private move(key: string): promise.Promise<any> {
        return browser.actions()
            .sendKeys(key)
            .perform();
    }
}
