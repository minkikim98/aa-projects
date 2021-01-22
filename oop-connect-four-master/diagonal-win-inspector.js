export class DiagonalWinInspector {
    constructor(cols) {
        this.cols = cols
    }
    inspect() {
        for (let i = 0; i < 3; i++) {
            let square1 = this.cols[0].getTokenAt(i);
            let square2 = this.cols[1].getTokenAt(i + 1);
            let square3 = this.cols[2].getTokenAt(i + 2);
            let square4 = this.cols[3].getTokenAt(i + 3);

            if (square1 === square2 && square2 === square3 &&
                square3 === square4 && square1 !== null) {
                return square1;
            }
        }
        for (let i = 0; i < 3; i++) {
            let square1 = this.cols[3].getTokenAt(i);
            let square2 = this.cols[2].getTokenAt(i + 1);
            let square3 = this.cols[1].getTokenAt(i + 2);
            let square4 = this.cols[0].getTokenAt(i + 3);

            if (square1 === square2 && square2 === square3 &&
                square3 === square4 && square1 !== null) {
                return square1;
            }
        }
        return 0;

    }


}
