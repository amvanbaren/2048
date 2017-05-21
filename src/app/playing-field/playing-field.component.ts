import { Component, OnInit, HostListener } from '@angular/core';
import * as Chance from 'chance';
import { Point } from './point';
import { Direction } from './direction';
import { Matrix } from './matrix';

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
  private matrix;

  tiles: number[][];

  constructor() {
    this.chance = new Chance();
    this.matrix = new Matrix();
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
    this.move(Direction.Up);
  }

  @HostListener('window:keyup.arrowdown')
  moveDown() {
    this.move(Direction.Down);
  }

  @HostListener('window:keyup.arrowleft')
  moveLeft() {
    this.move(Direction.Left);
  }

  @HostListener('window:keyup.arrowright')
  moveRight() {
    this.move(Direction.Right);
  }

  private move(direction: Direction) {
    // copy tiles
    let tiles: number[][] = [];
    this.tiles.forEach(r => {
      tiles.push(r.slice(0));
    });

    let degrees: number;
    switch (direction) {
      case Direction.Up:
        degrees = 0;
        break;
      case Direction.Down:
        degrees = 180;
        break;
      case Direction.Left:
        degrees = 270;
        break;
      case Direction.Right:
        degrees = 90;
        break;
    }

    tiles = this.matrix.rotate(tiles, degrees);
    console.log(JSON.stringify(tiles));

    // up
    Array.from(Array(this.rows - 1), (c, i) => {
      // start with the second row
      const index = i + 1;
      Array.from(Array(this.columns), (r, j) => {
        let u;
        // move tiles
        for (u = 0; u < index; u++) {
          if (tiles[u][j] === this.empty) {
            const value = tiles[index][j];
            tiles[index][j] = this.empty;
            tiles[u][j] = value;
            break;
          }
        }
        // merge tiles
        if (u > 0 && tiles[u - 1][j] === tiles[u][j]) {
          tiles[u - 1][j] *= 2;
          tiles[u][j] = this.empty;
        }
      });
    });

    // rotate the tiles back
    degrees = 360 - degrees;
    tiles = this.matrix.rotate(tiles, degrees);
    console.log(JSON.stringify(tiles));

    let equal = true;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.tiles[i][j] !== tiles[i][j]) {
          equal = false;
          break;
        }
      }

      if (!equal) {
        break;
      }
    }

    if (!equal) {
      this.tiles.length = 0;
      tiles.forEach(r => {
        this.tiles.push(r.slice(0));
      });

      this.addRandomTiles(1);
    }
  }

  private rotate(tiles: number[][], degrees: number): number[][] {
    const newTiles = [];
    tiles.forEach(r => {
      newTiles.push(r.slice(0));
    });
    console.log(JSON.stringify(newTiles));
    const offsetX = degrees === 270 ? 0 : 3;
    const offsetY = degrees === 90 ? 0 : 3;
    const rad = this.degreesToRadians(degrees);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    Array.from(Array(this.rows), (c, y) => {
      Array.from(Array(this.columns), (r, x) => {
        const newX = Math.floor(x * cos - y * sin + offsetX);
        const newY = Math.floor(x * sin + y * cos + offsetY);
        console.log('new x: ' + newX + ' new y: ' + newY + '[' + x + ',' + y + ']');
        newTiles[newY][newX] = tiles[y][x];
      });
    });

    return newTiles;
  }

  private degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
  }

  private addRandomTiles(count: number) {
    const emptyTiles = [];
    this.tiles.forEach((r, i) => {
      r.forEach((t, j) => {
        if (t === this.empty) {
          emptyTiles.push(new Point(i, j));
        }
      });
    });

    let randomTiles = this.chance.pick(emptyTiles, count);
    if (!Array.isArray(randomTiles)) {
      randomTiles = [randomTiles];
    }

    randomTiles.forEach((p) => {
      const val = chance.integer({ min: 0, max: 9 }) === 0 ? 4 : 2;

      this.tiles[p.getX()][p.getY()] = val;
    });
  }
}
