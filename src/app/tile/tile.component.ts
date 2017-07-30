import { Component, Input} from '@angular/core';

import { Tile } from './tile';
import { TileAnimations } from './tile.animations';
import { Direction } from '../playing-field/direction';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  animations: TileAnimations.animations
})
export class TileComponent {
  private static readonly DIRECTIONS = [
    Direction[Direction.Down],
    Direction[Direction.Left],
    Direction[Direction.Right],
    Direction[Direction.Up]
  ];

  private _tile: Tile;

  state = Tile.STATE_DEFAULT;
  showBackground = false;

  @Input()
  set tile(tile: Tile) {
    this._tile = tile;
  }

  get tile(): Tile {
    return this._tile;
  }
}
