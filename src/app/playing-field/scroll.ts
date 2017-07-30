import { Point } from './point';

export class Scroll {

    enable() {
        document.onkeydown = () => { return false; };
    }

    disable() {
        delete document.onkeydown;
    }
}