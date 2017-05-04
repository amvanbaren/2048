export class ColorPicker {
    private colorMap: string[];

    constructor() {
        this.colorMap = [
            '#ffffff',
            '#eee4da',
            '#ede0c8',
            '#f2b179',
            '#f59563',
            '#f67c5f',
            '#f65e3b',
            '#edcf72',
            '#edcc61',
            '#edc850',
            '#edc53f',
            '#edc22e'
        ];
    }

    pick(value: number) {
        const index = value > 0 ? Math.log2(value) : 0;
        return this.colorMap[index];
    }
}