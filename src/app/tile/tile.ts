export class Tile {
    private _value: number;
    private _changed: boolean;

    constructor(value: number) {
        this._value = value;
        this._changed = false;
    }

    set value(value: number) {
        if (value !== this._value) {
            this._value = value;
            this._changed = value > 0;
        }
    }

    get value(): number {
        return this._value;
    }

    get changed(): boolean {
        return this._changed;
    }
}
