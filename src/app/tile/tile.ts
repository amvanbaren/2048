import { Direction } from '../playing-field/direction';
import { Point } from '../playing-field/point';

export class Tile {
    static readonly STATE_DEFAULT = 'default';
    static readonly STATE_BOUNCE = 'bounce';
    static readonly STATE_MERGE = 'merge';

    private _value: number;
    private _added: boolean;
    private _merged: boolean;
    private _direction: Direction;
    private _point: Point;

    constructor(value: number) {
        this._value = value;
        this._added = false;
        this._merged = false;
    }

    set value(value: number) {
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    get state(): string {
        if (this._added) {
            return Tile.STATE_BOUNCE;
        }
        if(this._merged) {
            return Tile.STATE_MERGE + Direction[this._direction];
        }
        if(this._direction) {
            return Direction[this._direction];
        }

        return Tile.STATE_DEFAULT;
    }

    set added(added: boolean) {
        this._added = added;
    }

    get added() {
        return this._added;
    }

    set merged(merged: boolean) {
        this._merged = merged;
    }

    get merged(): boolean {
        return this._merged;
    }

    set direction(direction: Direction) {
        this._direction = direction;
    }

    get direction(): Direction {
        return this._direction;
    }

    set point(point: Point) {
        this._point = point;
    }

    get point(): Point {
        return this._point;
    }
}
