import { Component, OnInit, HostListener } from '@angular/core';
import * as Chance from 'chance';
import { Point } from './point';

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

  tiles: number[][];

  constructor() {
    this.chance = new Chance();
    this.tiles = [];

    Array.from(Array(this.rows), () => {
      const tileRow = [];
      Array.from(Array(this.columns), () => {
        tileRow.push(this.empty);
      });

      this.tiles.push(tileRow);
    });
  }

  ngOnInit() {
    this.addRandomTiles(2);
  }

  @HostListener('window:keyup.arrowup')
  moveUp() {
    Array.from(Array(this.rows), (c, i) => {
      Array.from(Array(this.columns), (r, j) => {
        const index = this.rows - i - 1; // reverse the index
        if (index > 0) {
          const oneUp = index - 1;
          if (this.tiles[oneUp][j] === this.empty) {
            const value = this.tiles[index][j];
            this.updateTile(new Point(oneUp, j), value);
            this.updateTile(new Point(index, j), this.empty);
          }
        }
      });
    });

    this.addRandomTiles(1);
  }

  @HostListener('window:keyup.arrowdown')
  moveDown() {
      Array.from(Array(this.rows), (c, i) => {
      Array.from(Array(this.columns), (r, j) => {
        const index = i;
        if (index < this.rows - 1) {
          const oneDown = index + 1;
          if (this.tiles[oneDown][j] === this.empty) {
            const value = this.tiles[index][j];
            this.updateTile(new Point(oneDown, j), value);
            this.updateTile(new Point(index, j), this.empty);
          }
        }
      });
    });

    this.addRandomTiles(1);
  }

  @HostListener('window:keyup.arrowleft')
  moveLeft(){
      Array.from(Array(this.rows), (c, i) => {
      Array.from(Array(this.columns), (r, j) => {
        const index = this.columns - j - 1; // reverse the index
        if (index > 0) {
          const oneLeft = index - 1;
          if (this.tiles[i][oneLeft] === this.empty) {
            const value = this.tiles[i][index];
            this.updateTile(new Point(i, oneLeft), value);
            this.updateTile(new Point(i, index), this.empty);
          }
        }
      });
    });

    this.addRandomTiles(1);
  }

  @HostListener('window:keyup.arrowright')
  moveRight(){
      Array.from(Array(this.rows), (c, i) => {
      Array.from(Array(this.columns), (r, j) => {
        const index = j;
        if (index < this.columns - 1) {
          const oneRight = index + 1;
          if (this.tiles[i][oneRight] === this.empty) {
            const value = this.tiles[i][index];
            this.updateTile(new Point(i, oneRight), value);
            this.updateTile(new Point(i, index), this.empty);
          }
        }
      });
    });

    this.addRandomTiles(1);
  }

  private addRandomTiles(count: number){
    const emptyTiles = [];
    this.tiles.forEach((r, i) => {
      r.forEach((t, j) => {
        if (t === this.empty){
          emptyTiles.push(new Point(i, j));
        }
      });
    });

    let randomTiles = this.chance.pick(emptyTiles, count);
    if (!Array.isArray(randomTiles)) {
      randomTiles = [randomTiles];
    }

    randomTiles.forEach((p) => {
      const val = chance.integer({min: 0, max: 9}) === 0 ? 4 : 2;

      this.updateTile(p, val);
    });
  }

  private updateTile(point: Point, value: number) {
    this.tiles[point.getX()][point.getY()] = value;
  }
}
