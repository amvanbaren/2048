import { browser, promise, element, by, until, protractor, ElementFinder} from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

export class GamePage {
    private playingField: ElementFinder;

    constructor(){
        this.playingField = element(by.id('playing-field'));
    }

    navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }

    getScore(): promise.Promise<number> {
        return element(by.id('score')).getText().then(Number.parseInt);
    }

    getPlayingField(): ElementFinder {
        return this.playingField;
    }

    moveUp() {
        this.move(protractor.Key.ARROW_UP);
    }

    moveDown() {
        this.move(protractor.Key.ARROW_DOWN);
    }

    moveLeft() {
        this.move(protractor.Key.ARROW_LEFT);
    }

    moveRight() {
        this.move(protractor.Key.ARROW_RIGHT);
    }

    private move(key: string){
        this.playingField.sendKeys(key);
    }
}