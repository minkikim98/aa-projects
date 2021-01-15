import { Game } from './game.js';

let game = undefined;

function updateUI() {
    let holder = document.getElementById('board-holder');
    if (!game) {
        holder.classList.add('is-invisible');
    } else {
        holder.classList.remove('is-invisible');
        document.getElementById('game-name').innerHTML = game.getName();

        let clickTargets = document.getElementById("click-targets");
        if (game.currentPlayer === 1) {
            clickTargets.classList.add("black");
            clickTargets.classList.remove("red");
        } else {
            clickTargets.classList.add("red");
            clickTargets.classList.remove("black");
        }

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                let square = document.getElementById(`square-${i}-${j}`);
                let tokenValue = game.getTokenAt(i, j);
                square.innerHTML = '';
                if (tokenValue) {
                    let checker = document.createElement('div');
                    checker.classList.add('token');
                    if (tokenValue === 1) {
                        checker.classList.add('black');
                    } else if (tokenValue === 2) {
                        checker.classList.add('red');
                    }
                    square.appendChild(checker);
                }
            }
        }

        for (let i = 0; i < 7; i++) {
            let col = document.getElementById(`column-${i}`);
            if (game.isColumnFull(i)) col.classList.add("full");
            else col.classList.remove("full");
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let player1Name = document.getElementById('player-1-name');
    let player2Name = document.getElementById('player-2-name');
    let newGameButton = document.getElementById('new-game')

    player1Name.addEventListener('keyup', (event) => {
        newGameButton.disabled = !(player1Name.value && player2Name.value);
    });

    player2Name.addEventListener('keyup', (event) => {
        newGameButton.disabled = !(player1Name.value && player2Name.value);
    });

    newGameButton.addEventListener('click', (event) => {
        game = new Game(player1Name.value, player2Name.value);
        player1Name.value = '';
        player2Name.value = '';
        newGameButton.disabled = true;
        updateUI();
    });

    let clickTargets = document.getElementById("click-targets");
    clickTargets.addEventListener("click", event => {
        if (!event.target.classList.contains("click-target")) return;
        let colId = event.target.id;
        let colIDNum = Number(colId.slice(-1))
        game.playInColumn(colIDNum);
        updateUI();
    });
});
