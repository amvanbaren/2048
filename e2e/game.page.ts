import { browser, promise, element, by, until, protractor, ElementFinder} from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

export class GamePage {

    constructor(){}

    navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }

    clickNewGame(): promise.Promise<any> {
        return browser.findElement(by.id('new-game'))
            .click();
    }

    getScore(): promise.Promise<number> {
        return element(by.id('score')).getText().then(Number.parseInt);
    }

    getBestScore(): promise.Promise<number> {
        return element(by.id('best')).getText().then(Number.parseInt);
    }

    setBestScore(bestScore: number): promise.Promise<any> {
        return browser.executeScript('document.getElementById(\'best\').innerHTML=' + bestScore);
    }

    getPlayingField(): promise.Promise<ElementFinder> {
        return browser.waitForAngular()
            .then(() => {
                return element(by.id('playing-field'))
            });
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
