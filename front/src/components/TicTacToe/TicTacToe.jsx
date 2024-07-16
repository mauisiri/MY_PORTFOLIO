import './TicTacToe.css';
import { useState } from 'react';

import Player from "../Player/Player";
import GameBoard from "../GameBoard/GameBoard";
import Log from "../Log/Log";
import { WINNING_COMBINATIONS } from "./WinningCombinations";
import GameOver from '../GameOver/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns [0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function TicTacToe() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row[combination[0].column]];
    const secondSquareSymbol = gameBoard[combination[1].row[combination[1].column]];
    const thirdSquareSymbol = gameBoard[combination[2].row[combination[2].column]];

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol
    ) {
        winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
  
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
  
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        Tic Tac Toe
        <ol id="players">
          <Player 
            initialName="Player 1" 
            symbol="X" 
            isActive={activePlayer === 'X'}
          />
          <Player 
            initialName="Player 2" 
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        {winner && <GameOver winner={winner}/>}
          <GameBoard 
            onSelectSquare = {handleSelectSquare} 
            board={gameBoard} 
        />
      </div>
    </main>
  );
}

export default TicTacToe;