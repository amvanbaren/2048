export class Matrix {

    rotate(matrix: number[][], degrees: number): number[][] {
        switch (degrees) {
            case 90:
            matrix = this.transpose(matrix);
            this.horizontalReflection(matrix);
            break;
            case 180:
            this.horizontalReflection(matrix);
            this.verticalReflection(matrix);
            break;
            case 270:
            matrix = this.transpose(matrix);
            this.verticalReflection(matrix);
            break;
        }

        return matrix;
    }

    transpose(matrix: number[][]): number[][] {
        const m = matrix.length;
        const n = matrix[0].length;
        const result = new Array(m);
        Array.from(Array(m), (c, i) => {
            result[i] = new Array(n);
        });

        console.log(JSON.stringify(result));
        Array.from(Array(m), (c, i) => {
            Array.from(Array(n), (r, j) => {
                result[j][i] = matrix[i][j];
            });
        });

        console.log(JSON.stringify(result));
        return result;
    }

    horizontalReflection(matrix: number[][]) {
        const m = matrix.length;
        const n = matrix[0].length;
        let temp = 0;

        Array.from(Array(m / 2), (c, i) => {
            Array.from(Array(n), (r, j) => {
                temp = matrix[i][j];

                const index = m - (i + 1);
                matrix[i][j] = matrix[index][j];
                matrix[index][j] = temp;
            });
        });
    }

    verticalReflection(matrix: number[][]) {
        const m = matrix.length;
        const n = matrix[0].length;
        let temp = 0;

        Array.from(Array(n / 2), (c, i) => {
            Array.from(Array(m), (r, j) => {
                temp = matrix[j][i];

                const index = n - (i + 1);
                matrix[j][i] = matrix[j][index];
                matrix[j][index] = temp;
            });
        });
    }
}
