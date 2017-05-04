export class Tile {
    private value: number;
    private color: string;

    constructor() {
        this.setValue(0);
        this.setColor('white');
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
}