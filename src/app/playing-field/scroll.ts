import { Point } from './point';

export class Scroll {

    private position = new Point(0, 0);

    private event = 'scroll';
    private noscroll = () => { window.scrollTo(this.position.x, this.position.y); };

    public enable() {
        document.onkeydown = () => { return false; };
        // this.position.x = window.screenX;
        // this.position.y = window.screenY;
        // window.addEventListener(this.event, this.noscroll);
    }

    public disable() {
        // window.removeEventListener(this.event, this.noscroll);
        delete document.onkeydown;
    }
}