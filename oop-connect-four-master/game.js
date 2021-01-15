import { Column } from "./column.js";

export class Game {
    constructor(player1Name, player2Name) {
        this.name1 = player1Name;
        this.name2 = player2Name;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(),
        new Column(), new Column(), new Column(), new Column()];
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 3) return `${this.name1} ties with ${this.name2}!`;
        return this.name1 + " vs " + this.name2;
    }

    isColumnFull(col) {
        return this.columns[col].isColumnFull();
    }

    playInColumn(col) {
        let selectedColumn = this.columns[col];
        if (!selectedColumn.isColumnFull()) {
            selectedColumn.add(this.currentPlayer);
            this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }
        this.checkForTie();
    }

    checkForTie() {
        if (this.columns.every(column => column.isColumnFull())) {
            this.winnerNumber = 3;
        }
    }

    getTokenAt(row, col) {
        let selectedColumn = this.columns[col]
        return selectedColumn.getTokenAt(row);
    }
}
