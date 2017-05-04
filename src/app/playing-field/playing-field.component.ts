import { Component, OnInit } from '@angular/core';
import * as Chance from 'chance';
import { Tile } from '../tile/tile';
import { Point } from './point';
import { ColorPicker } from './color-picker';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit {
  private empty = 0;
  private rows = 4;
  private columns = 4;
  private chance;
  private colorPicker;

  tiles: Tile[][];

  constructor() {
    this.chance = new Chance();
    this.colorPicker = new ColorPicker();
    this.tiles = [];

    Array.from(Array(this.rows), () => {
      const tileRow = [];
      Array.from(Array(this.columns), () => {
        tileRow.push(new Tile());
      });

      this.tiles.push(tileRow);
    });
  }

  ngOnInit() {
    this.addRandomTiles(2);
  }

  private addRandomTiles(count: number){
    const emptyTiles = [];
    this.tiles.forEach((r, i) => {
      r.forEach((t, j) => {
        if(t.getValue() === this.empty){
          emptyTiles.push(new Point(i, j));
        }
      });
    });

    const randomTiles = this.chance.pick(emptyTiles, count) as Point[];
    randomTiles.forEach((p) => {
      const val = chance.integer({min: 0, max: 4}) === 0 ? 4 : 2;

      this.updateTile(p, val);
    });
  }

  private updateTile(point: Point, value: number) {
    const tile = this.tiles[point.getX()][point.getY()];
    const color = this.colorPicker.pick(value);

    tile.setValue(value);
    tile.setColor(color);
  }
}
