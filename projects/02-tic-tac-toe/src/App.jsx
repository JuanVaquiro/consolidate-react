import { useState } from "react";

const TURNS = {
  X: "❌",
  O: "🔘",
};

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // No Actualizar la posicion, si ya tiene algo
    if (board[index] != null || winner ) return;
    // actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } //revisar si el juego a terminado en empate
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const checkEndGame = (newBoard) => { 
    // revisar si hay un empate
    // si no hay mas espacios vacios en el tablaro
    return newBoard.every((square) => square !== null)
   }

  const resetGamer = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGamer}>Emepzar de nuevo</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Gano' + winner
                }
              </h2>
                <header>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGamer}>Emepzar de nuevo</button>
                </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App;
