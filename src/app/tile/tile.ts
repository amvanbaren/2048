export class Tile {
    static readonly STATE_DEFAULT = 'default';
    static readonly STATE_BOUNCE = 'bounce';

    private _value: number;
    private _state: string;

    constructor(value: number) {
        this._value = value;
        this._state = Tile.STATE_DEFAULT;
    }

    set value(value: number) {
        if (value !== this._value) {
            this._value = value;

            if(this._value > 0 && this._state === Tile.STATE_DEFAULT) {
                this._state = Tile.STATE_BOUNCE;
            }
        }
    }

    get value(): number {
        return this._value;
    }

    set state(state: string) {
        this._state = state;
    }

    get state(): string {
        return this._state;
    }
}
