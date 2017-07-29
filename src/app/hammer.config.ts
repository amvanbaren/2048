import 'hammerjs';
import 'hammer-timejs';
import { HammerGestureConfig } from '@angular/platform-browser';
import { HammerInstance } from '@angular/platform-browser/src/dom/events/hammer_gestures';


export class HammerConfig extends HammerGestureConfig  {

    overrides = <any> {
        'tap': { enable: false },
        'doubletap': { enable: false },
        'pan': { enable: false },
        'press': { enable: false },
        'pinch': { enable: false },
        'rotate': { enable: false },
        'swipe': { enable: true, direction: Hammer.DIRECTION_ALL }
    }
}