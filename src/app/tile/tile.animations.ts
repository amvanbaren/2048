import { trigger, state, style, animate, transition, keyframes, group, AnimationStyleMetadata } from '@angular/animations';

import { Tile } from './tile';
import { Direction } from '../playing-field/direction';

export class TileAnimations {
    static get animations() {
        const bounceFrames = [
            style({ offset: 0, transform: 'scale(0)' }),
            style({ offset: 0.5, transform: 'scale(1.2)' }),
            style({ offset: 1, transform: 'scale(1)' })
        ];

        const bounceAnimation = animate(200, keyframes(bounceFrames));
        const mergeAnimation = animate('200ms 100ms', keyframes(bounceFrames));
        const moveUpAnimation = animate(100, keyframes([
            style({ offset: 0, transform: 'translateY(100%)' }),
            style({ offset: 1, transform: 'translate(0, 0)' })
        ]));
        const moveDownAnimation = animate(100, keyframes([
            style({ offset: 0, transform: 'translateY(-100%)' }),
            style({ offset: 1, transform: 'translate(0, 0)' })
        ]));
        const moveLeftAnimation = animate(100, keyframes([
            style({ offset: 0, transform: 'translateX(100%)' }),
            style({ offset: 1, transform: 'translate(0, 0)' })
        ]));
        const moveRightAnimation = animate(100, keyframes([
            style({ offset: 0, transform: 'translateX(-100%)' }),
            style({ offset: 1, transform: 'translate(0, 0)' })
        ]));

        return [
            trigger('background', [
                state(Tile.STATE_DEFAULT, style({ opacity: 0 })),
                transition(Tile.STATE_DEFAULT + ' => *', style({ opacity: 1 }))
            ]),
            trigger('state', [
                state(Tile.STATE_DEFAULT, style({ transform: 'scale(1)' })),
                transition('* => ' + Tile.STATE_BOUNCE, [bounceAnimation]),
                transition('* => ' + Direction[Direction.Up], [moveUpAnimation]),
                transition('* => ' + Direction[Direction.Down], [moveDownAnimation]),
                transition('* => ' + Direction[Direction.Left], [moveLeftAnimation]),
                transition('* => ' + Direction[Direction.Right], [moveRightAnimation]),
                transition('* => ' + Tile.STATE_MERGE + Direction[Direction.Up], [
                    group([moveUpAnimation, mergeAnimation])
                ]),
                transition('* => ' + Tile.STATE_MERGE + Direction[Direction.Down], [
                    group([moveDownAnimation, mergeAnimation])
                ]),
                transition('* => ' + Tile.STATE_MERGE + Direction[Direction.Left], [
                    group([moveLeftAnimation, mergeAnimation])
                ]),
                transition('* => ' + Tile.STATE_MERGE + Direction[Direction.Right], [
                    group([moveRightAnimation, mergeAnimation])
                ])
            ])
        ];
    }
}