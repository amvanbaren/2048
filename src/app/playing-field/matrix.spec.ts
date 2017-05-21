import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrix } from './matrix';

describe('Matrix', () => {
    let matrix: Matrix;
    let values: number[][];

    beforeEach(() => {
        matrix = new Matrix();
        values = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
    });

    it('should transpose a matrix', () => {
        const result = matrix.transpose(values);
        const expected = [
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16]
        ];

        expect(result).toEqual(expected);
    });

    it('should horizontally reflect a matrix', () => {
        matrix.horizontalReflection(values);
        const expected = [
            [13, 14, 15, 16],
            [9, 10, 11, 12],
            [5, 6, 7, 8],
            [1, 2, 3, 4]
        ];

        expect(values).toEqual(expected);
    });

    it('should vertically reflect a matrix', () => {
        matrix.verticalReflection(values);
        const expected = [
            [4, 3, 2, 1],
            [8, 7, 6, 5],
            [12, 11, 10, 9],
            [16, 15, 14, 13]
        ];

        expect(values).toEqual(expected);
    })

    it('should rotate a matrix by 90 degrees', () => {
        const result = matrix.rotate(values, 90);
        const expected = [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13]
        ];

        expect(result).toEqual(expected);
    });

    it('should rotate a matrix by 180 degrees', () => {
        const result = matrix.rotate(values, 180);
        const expected = [
            [16, 15, 14, 13],
            [12, 11, 10, 9],
            [8, 7, 6, 5],
            [4, 3, 2, 1]
        ];

        expect(result).toEqual(expected);
    });

    it('should rotate a matrix by 270 degrees', () => {
        const result = matrix.rotate(values, 270);
        const expected = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ];

        expect(result).toEqual(expected);
    });
});
