import Square from './Squere'

const WinnerModal = ({ winner, resetGamer }) => {
  //  ( winner !== null && )
  if (winner === null) return null
  const WinnerText = winner === false ? 'Empate' : 'Gano'
  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {WinnerText}
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

export default WinnerModal
