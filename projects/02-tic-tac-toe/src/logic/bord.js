import { WINNER_COMBOS } from "../consstants";

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  // revisar si hay un empate
  // si no hay mas espacios vacios en el tablaro
  return newBoard.every((square) => square !== null);
};
