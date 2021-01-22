import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";
import { RowWinInspector } from "./row-win-inspector.js";
import { DiagonalWinInspector } from "./diagonal-win-inspector.js";



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
        if (this.winnerNumber === 1) return `${this.name1} wins!`;
        if (this.winnerNumber === 2) return `${this.name2} wins!`;
        return this.name1 + " vs " + this.name2;
    }

    isColumnFull(col) {
        if (this.winnerNumber) return true;
        return this.columns[col].isColumnFull();
    }

    playInColumn(col) {
        let selectedColumn = this.columns[col];
        if (!selectedColumn.isColumnFull() && !this.isGameOver()) {
            selectedColumn.add(this.currentPlayer);
            this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }

    isGameOver() {
        if (this.winnerNumber === 0) return false
        return true;
    }

    checkForColumnWin() {
        if (this.winnerNumber) return;
        for (let i = 0; i < 7; i++) {
            let inspector = new ColumnWinInspector(this.columns[i]);
            let winner = inspector.inspect();
            if (winner) {
                this.winnerNumber = winner;
                return;
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber) return;
        for (let i = 0; i < 4; i++) {
            let inspector = new RowWinInspector(this.columns.slice(i, i + 4));
            let winner = inspector.inspect();
            if (winner) {
                this.winnerNumber = winner;
                return;
            }
        }
    }

    checkForDiagonalWin() {
        if (this.winnerNumber) return;
        for (let i = 0; i < 4; i++) {
            let inspector = new DiagonalWinInspector(this.columns.slice(i, i + 4));
            let winner = inspector.inspect();
            if (winner) {
                this.winnerNumber = winner;
                return;
            }
        }
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
