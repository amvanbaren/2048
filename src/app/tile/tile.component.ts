import { Component, Input, DoCheck} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Tile } from './tile';
import { Direction } from '../playing-field/direction';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
animations: [
  trigger('state', [
    state(Tile.STATE_DEFAULT, style({transform: 'scale(1)'})),
    transition('* => ' + Tile.STATE_BOUNCE, [
      animate(300, keyframes([
        style({offset: 0, transform: 'scale(0.7)'}),
        style({offset: 1, transform: 'scale(1)'})
      ]))
    ]),
    transition('* => ' + Direction[Direction.Up], [
      animate(300, keyframes([
        style({offset: 0, transform: 'translate(0, 0)'}),
        style({offset: 1, transform: 'translateY(-10em)'})
      ]))
    ]),
    transition('* => ' + Direction[Direction.Down], [
      animate(300, keyframes([
        style({offset: 0, transform: 'translate(0, 0)'}),
        style({offset: 1, transform: 'translateY(10em)'})
      ]))
    ]),
    transition('* => ' + Direction[Direction.Left], [
      animate(300, keyframes([
        style({offset: 0, transform: 'translate(0, 0)'}),
        style({offset: 1, transform: 'translateX(-10em)'})
      ]))
    ]),
    transition('* => ' + Direction[Direction.Right], [
      animate(300, keyframes([
        style({offset: 0, transform: 'translate(0, 0)'}),
        style({offset: 1, transform: 'translateX(10em)'})
      ]))
    ]),
  ])
]
})
export class TileComponent implements DoCheck {
  private static readonly DIRECTIONS = [
    Direction[Direction.Down],
    Direction[Direction.Left],
    Direction[Direction.Right],
    Direction[Direction.Up]
  ];

  private _tile: Tile;
  state = 'default';

  ngDoCheck() {

  }

  @Input()
  set tile(tile: Tile) {
    this._tile = tile;
  }

  get tile(): Tile {
    return this._tile;
  }

  animationDone() {
    console.log(this._tile.state);
    if (TileComponent.DIRECTIONS.includes(this._tile.state)) {
      this._tile.state = Tile.STATE_BOUNCE;
    } else if (this._tile.state === Tile.STATE_BOUNCE) {
      this._tile.state = Tile.STATE_DEFAULT;
    }
  }
}
