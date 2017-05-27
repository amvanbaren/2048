import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as Chance from 'chance';
import { Point } from './point';
import { Direction } from './direction';
import { Matrix } from './matrix';
import { ScoreboardService } from '../score-board.service';
import { PlayingFieldService } from '../playing-field.service';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit, OnDestroy {
  private empty = 0;
  private rows = 4;
  private columns = 4;
  private scoreBoardService: ScoreboardService;
  private chance;
  private matrix;

  private subscription: Subscription;

  tiles: number[][];

  constructor(scoreBoardService: ScoreboardService, playingFieldService: PlayingFieldService) {
    this.scoreBoardService = scoreBoardService;
    this.chance = new Chance();
    this.matrix = new Matrix();
    this.subscription = playingFieldService.playingFieldReset$.subscribe(() => { this.reset(); });
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  private reset() {
    this.tiles = [];

    Array.from(Array(this.rows), () => {
      const tileRow = [];
      Array.from(Array(this.columns), () => {
        tileRow.push(this.empty);
      });

      this.tiles.push(tileRow);
    });

    this.addRandomTiles(2);
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
          const value = tiles[u - 1][j] * 2;
          tiles[u - 1][j] = value;
          tiles[u][j] = this.empty;

          this.scoreBoardService.changeScore(value);
        }
      });
    });

    // rotate the tiles back
    degrees = 360 - degrees;
    tiles = this.matrix.rotate(tiles, degrees);

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
