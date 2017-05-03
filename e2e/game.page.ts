import { browser, promise, element, by, protractor, ElementFinder } from 'protractor';

export class GamePage {
    private playingField: ElementFinder;

    constructor(){
        this.playingField = element(by.id('playing-field'));
    }

    navigateTo(): promise.Promise<any> {
        return browser.get('/');
    }

    waitReady() {
        browser.wait(expect(this.playingField.isPresent()).toBeTruthy, 5000);
    }

    getScore(): number {
        const scoreText = element(by.id('score')).getText();
        return Number(scoreText);
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