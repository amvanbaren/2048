import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Direction } from './direction';
import { Tile } from '../tile/tile';
import { Matrix } from './matrix';
import { Scroll } from './scroll';
import { ScoreboardService } from '../score-board.service';
import { PlayingFieldService } from '../playing-field.service';
import { PlayingFieldManager } from './playing-field.manager';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit, OnDestroy {
  private scoreBoardService: ScoreboardService;
  private scroll: Scroll;
  private subscription: Subscription;
  private manager: PlayingFieldManager;

  gameOver: boolean;
  gameWon: boolean;
  tiles: Tile[][];

  constructor(scoreBoardService: ScoreboardService, playingFieldService: PlayingFieldService) {
    this.scoreBoardService = scoreBoardService;
    this.scroll = new Scroll();
    this.subscription = playingFieldService.playingFieldReset$.subscribe(() => { this.reset(); });
    this.manager = new PlayingFieldManager();
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('window:keyup.arrowup')
  arrowUp() {
    this.scroll.disable();
    this.moveUp();
    this.scroll.enable();
  }

  moveUp() {
    this.move(Direction.Up);
  }

  @HostListener('window:keyup.arrowdown')
  arrowDown() {
    this.scroll.disable();
    this.moveDown();
    this.scroll.enable();
  }

  moveDown() {
    this.move(Direction.Down);
  }

  @HostListener('window:keyup.arrowleft')
  arrowLeft() {
    this.scroll.disable();
    this.moveLeft();
    this.scroll.enable();
  }

  moveLeft() {
    this.move(Direction.Left);
  }

  @HostListener('window:keyup.arrowright')
  arrowRight() {
    this.scroll.disable();
    this.moveRight();
    this.scroll.enable();
  }

  private reset() {
    this.gameOver = false;
    this.gameWon = false;
    this.tiles = [];

    Array.from(Array(this.rows), () => {
      const tileRow = [];
      Array.from(Array(this.columns), () => {
        tileRow.push(new Tile(this.empty));
      });

      this.tiles.push(tileRow);
    });

    this.addRandomTiles(2);
  }

  private move(direction: Direction) {
    // copy tiles
    let tiles: Tile[][] = [];
    this.tiles.forEach(r => {
      tiles.push(r.slice(0).map(t => new Tile(t.value)));
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
    Array.from(Array(this.rows - 1), (r, i) => {
      // start with the second row
      const index = i + 1;
      Array.from(Array(this.columns), (c, j) => {
        let u;
        // move tiles
        for (u = 0; u < index; u++) {
          if (tiles[u][j].value === this.empty) {
            const value = tiles[index][j].value;
            tiles[index][j].value = this.empty;

            tiles[u][j].value = value;
            break;
          }
        }
        // merge tiles
        if (u > 0 && !tiles[u - 1][j].merged && tiles[u - 1][j].value === tiles[u][j].value) {
          const value = tiles[u - 1][j].value * 2;
          tiles[u - 1][j].value = value;
          tiles[u - 1][j].merged = true;
          tiles[u][j].value = this.empty;

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
        if (this.tiles[i][j].value !== tiles[i][j].value) {
          equal = false;
          break;
        }
      }

      if (!equal) {
        break;
      }
    }

    if (!equal) {
      Array.from(Array(this.rows), (r, i) => {
        Array.from(Array(this.columns), (c, j) => {
          const tile = tiles[i][j];
          const value = tile.value;
          if (value !== this.empty && this.tiles[i][j].value !== value) {
            this.tiles[i][j].direction = direction;
          } else {
            this.tiles[i][j].direction = null;
          }

          this.tiles[i][j].value = tile.value;
          this.tiles[i][j].added = tile.added;
          this.tiles[i][j].merged = tile.merged;
        });
      });

      if (!this.hasWon()) {
        this.addRandomTiles(1);
      }
    } else {
      this.determinePossibleMoves();
    }
  }

  private addRandomTiles(count: number) {
    const emptyTiles = [];
    this.tiles.forEach((r, i) => {
      r.forEach((t, j) => {
        if (t.value === this.empty) {
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

      this.tiles[p.getX()][p.getY()].value = val;
      this.tiles[p.getX()][p.getY()].added = true;
    });
  }

  private determinePossibleMoves() {
    let playingFieldFull = true;

    emptyTilesLoop:
    for (const row of this.tiles) {
      for (const column of row) {
        if (column.value === this.empty) {
          playingFieldFull = false;
          break emptyTilesLoop;
        }
      }
    }

    if (playingFieldFull) {
      let canMergeTiles = false;

      const rows = this.rows - 1;
      mergeTilesRowLoop:
      for (let c = 0; c < this.columns; c++) {
        for (let r = 0; r < rows; r++) {
          if (this.tiles[r][c] === this.tiles[r + 1][c]) {
            canMergeTiles = true;
            break mergeTilesRowLoop;
          }
        }
      }

      if (!canMergeTiles) {
        const columns = this.columns - 1;
        mergeTilesColumnLoop:
        for (let r = 0; r < this.rows; r++) {
          for (let c = 0; c < columns; c++) {
            if (this.tiles[r][c] === this.tiles[r][c + 1]) {
              canMergeTiles = true;
              break mergeTilesColumnLoop;
            }
          }
        }
      }

      this.gameOver = !canMergeTiles;
    }
  }

  private hasWon() {
    const winningTile = 2048;

    hasWonLoop:
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        if (this.tiles[r][c].value === winningTile) {
          this.gameWon = true;
          break hasWonLoop;
        }
      }
    }

  moveRight() {
    this.move(Direction.Right);
  }

  private move(direction: Direction) {
    this.tiles = this.manager.move(this.tiles, direction);
    this.manager.gameOver(this.tiles);
    this.gameOver = this.manager.gameOver(this.tiles);
    this.gameWon = this.manager.gameWon(this.tiles);
  }

  private reset() {
    this.gameOver = false;
    this.gameWon = false;
    this.tiles = this.manager.resetPlayingField();
  }
}
