export class RowWinInspector {
    constructor(cols) {
        this.cols = cols;
    }
    inspect() {
        for (let i = 0; i < 7; i++) {
            let square1 = this.cols[0].getTokenAt(i);
            let square2 = this.cols[1].getTokenAt(i);
            let square3 = this.cols[2].getTokenAt(i);
            let square4 = this.cols[3].getTokenAt(i);
            if (square1 === square2 && square2 === square3 &&
                square3 === square4 && square1 !== null) {
                return square1;
            }
        }
        return 0;
    }
}
