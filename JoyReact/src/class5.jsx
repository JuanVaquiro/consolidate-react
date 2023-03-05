// hook
/*
  To summaarize
  core React loop

  -> A e-render is a React process where we figure out what needs to
  change (AKA 'reconciliation', the spot-the-differences game)

  -> if somemthing has changed between the tow snapshots, React will 'commit'
  those chancges by editing the DOM, so that it matches the lastes snaptshot.

  -> Whenever a DOM node us edite, the browser will RE-POINT, re-drawing the
  relevant pixels so that the user sees the correct UI

  -> Not all re-render require re-piant if nothing has changed between snapshots,
  React wont't edit any DOM nodes, and nothing will be re-painted
*/

/*
  -> Un e-render es un proceso React en el que averiguamos qué hay que
  cambiar (alias 'reconciliación', el juego de detectar las diferencias)

  -> Si algo ha cambiado entre las dos instantáneas, React "confirmará" esos
  cambios editando el DOM, para que coincida con la última instantánea.

  -> Cada vez que se edita un nodo del DOM, el navegador vuelve a apuntar, redibujando
  los píxeles relevantes para que el usuario vea la interfaz de usuario correcta.

  -> No todos los re-render requieren re-pintados si nada ha cambiado entre instantáneas,
  React no editará ningún nodo del DOM, y nada será re-pintado.
*/

const StartRating = ({ rating = 0 }) => {
  const star = (
    <img
      alt=''
      className='gold-star'
      src='https://sandpack-bundler.vercel.app/img/gold-star.svg'
    />
  )
  const stars = Array(rating).fill(star)

  return (
    <div>
      {stars}
    </div>
  )
}

// fnt range
const range = (start, end, step = 1) => {
  const output = []
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

console.log(range(1, 4))

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <div>
    <StartRating rating={4} />
    <StartRating rating={5} />
    <StartRating rating={1} />
  </div>
)
