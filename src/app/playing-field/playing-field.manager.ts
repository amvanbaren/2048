import { Direction } from './direction';
import { Matrix } from './matrix';
import * as Chance from 'chance';
import { Point } from './point';

export class PlayingFieldManager {
    private readonly ROWS = 4;
    private readonly COLUMNS = 4;
    private readonly EMPTY_TILE = 0;
    private readonly GOAL_TILE = 2048;

    private matrix: Matrix;
    private chance;

    constructor() {
        this.matrix = new Matrix();
        this.chance = new Chance();
    }

    resetPlayingField() {
        const tiles: number[][] = [];
        Array.from(Array(this.ROWS), () => {
            const tileRow = [];
            Array.from(Array(this.COLUMNS), () => {
                tileRow.push(this.EMPTY_TILE);
            });

            tiles.push(tileRow);
        });

        this.addRandomTiles(2, tiles);

        return tiles;
    }

    move(tiles: number[][], direction: Direction) {
        const oldTiles = this.copyTiles(tiles);
        tiles = this.copyTiles(tiles);
        tiles = this.rotateTiles(tiles, direction, false);

        // up
        Array.from(Array(this.ROWS - 1), (r, i) => {
            // start with the second row
            const index = i + 1;
            Array.from(Array(this.COLUMNS), (c, j) => {
                let u;
                // move tiles
                for (u = 0; u < index; u++) {
                    if (tiles[u][j] === this.EMPTY_TILE) {
                        const value = tiles[index][j];
                        tiles[index][j] = this.EMPTY_TILE;
                        tiles[u][j] = value;
                        break;
                    }
                }
                // merge tiles
                if (u > 0 && tiles[u - 1][j] === tiles[u][j]) {
                    const value = tiles[u - 1][j] * 2;
                    tiles[u - 1][j] = value;
                    tiles[u][j] = this.EMPTY_TILE;

                    // this.scoreBoardService.changeScore(value);
                }
            });
        });

        // rotate the tiles back
        tiles = this.rotateTiles(tiles, direction, true);
        if (this.tilesChanged(oldTiles, tiles)) {
            this.addRandomTiles(1, tiles);
        }

        return tiles;
    }

    gameOver(tiles: number[][]) {
        let gameOver = false;
        let playingFieldFull = true;

        emptyTilesLoop:
        for (const row of tiles) {
            for (const column of row) {
                if (column === this.EMPTY_TILE) {
                    playingFieldFull = false;
                    break emptyTilesLoop;
                }
            }
        }

        if (playingFieldFull) {
            let canMergeTiles = false;

            // check for merges vertically
            const rows = this.ROWS - 1;
            mergeTilesRowLoop:
            for (let c = 0; c < this.COLUMNS; c++) {
                for (let r = 0; r < rows; r++) {
                    if (tiles[r][c] === tiles[r + 1][c]) {
                        canMergeTiles = true;
                        break mergeTilesRowLoop;
                    }
                }
            }

            if (!canMergeTiles) {
                // check for merges horizontally
                const columns = this.COLUMNS - 1;
                mergeTilesColumnLoop:
                for (let r = 0; r < this.ROWS; r++) {
                    for (let c = 0; c < columns; c++) {
                        if (tiles[r][c] === tiles[r][c + 1]) {
                            canMergeTiles = true;
                            break mergeTilesColumnLoop;
                        }
                    }
                }
            }

            gameOver = !canMergeTiles;
        }

        return gameOver;
    }

    gameWon(tiles: number[][]) {
        let gameWon = false;

        hasWonLoop:
        for (let r = 0; r < this.ROWS; r++) {
            for (let c = 0; c < this.COLUMNS; c++) {
                if (tiles[r][c] === this.GOAL_TILE) {
                    gameWon = true;
                    break hasWonLoop;
                }
            }
        }

        return gameWon;
    }

    private copyTiles(tiles: number[][]) {
        const copy: number[][] = [];
        tiles.forEach(r => {
            copy.push(r.slice(0));
        });

        return copy;
    }

    private rotateTiles(tiles: number[][], direction: Direction, opposite: boolean) {
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

        if (opposite) {
            degrees = 360 - degrees;
        }

        return this.matrix.rotate(tiles, degrees);
    }

    private tilesChanged(oldTiles: number[][], tiles: number[][]): boolean {
        let changed = false;

        hasChangedLoop:
        for (let r = 0; r < this.ROWS; r++) {
            for (let c = 0; c < this.COLUMNS; c++) {
                if (oldTiles[r][c] !== tiles[r][c]) {
                    changed = true;
                    break hasChangedLoop;
                }
            }
        }

        return changed;
    }

    private addRandomTiles(amount: number, tiles: number[][]) {
        const emptyTiles = [];
        tiles.forEach((r, i) => {
            r.forEach((t, j) => {
                if (t === this.EMPTY_TILE) {
                    emptyTiles.push(new Point(i, j));
                }
            });
        });

        let randomTiles = this.chance.pick(emptyTiles, amount);
        if (!Array.isArray(randomTiles)) {
            randomTiles = [randomTiles];
        }

        randomTiles.forEach((p) => {
            const tileValue = chance.integer({ min: 0, max: 9 }) === 0 ? 4 : 2;

            tiles[p.x][p.y] = tileValue;
        });
    }
}