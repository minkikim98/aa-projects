export class Column {
    constructor() {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            temp.push(null);
        }
        this.column = temp;
    }

    add(playerNum) {
        for (let i = 5; i >= 0; i--) {
            if (!this.column[i]) {
                this.column[i] = playerNum;
                break;
            }
        }
    }

    isColumnFull() {
        return this.column[0];
    }

    getTokenAt(row) {
        return this.column[row];
    }
}
