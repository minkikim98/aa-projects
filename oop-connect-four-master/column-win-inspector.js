export class ColumnWinInspector {
    constructor(col) {
        this.col = col;
    }

    inspect() {
        for (let i = 0; i < 3; i++) {
            let square1 = this.col[i];
            let square2 = this.col[i + 1];
            let square3 = this.col[i + 2];
            let square4 = this.col[i + 3];

            if (square1 === square2 && square2 === square3 &&
                square3 === square4 && square1 !== null) {
                return square1;
            }
        }
        return 0;
    }
}
