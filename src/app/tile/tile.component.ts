import { Component, Input, DoCheck} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Tile } from './tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
animations: [
  trigger('state', [
    state('default', style({transform: 'scale(1)'})),
    transition('default => changed', [
      animate(300, keyframes([
        style({offset: 0, transform: 'scale(0.7)'}),
        style({offset: 1, transform: 'scale(1)'})
      ]))
    ]),
  ])
]
})
export class TileComponent implements DoCheck {

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
}
