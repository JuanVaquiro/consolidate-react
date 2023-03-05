'use strict'

function App () {
  const [count, setCount] = React.useState(0)

  const increment = (value) => {
    if (value > 0) {
      const newValor = count + 1
      setCount(newValor)
    } else {
      const newValor = count - 1
      setCount(newValor)
    }
  }

  const incrementPlus = (value) => {
    if (value > 0) {
      const newValor = count + 10
      setCount(newValor)
    } else {
      const newValor = count - 10
      setCount(newValor)
    }
  }

  const reset = () => {
    setCount(0)
  }

  const random = () => {
    let numberRandom = Math.floor(Math.random() * 100)
    numberRandom = count + numberRandom
    setCount(numberRandom)
  }

  return (
    <div>
      <h1>ccurrente value:
        {' '}
        <span>{count}</span>
      </h1>
      <br />
      <button onClick={() => { increment(1) }}>+1</button>
      <button onClick={() => { incrementPlus(1) }}>+10</button>
      <button onClick={() => { reset() }}>reset</button>
      <button onClick={() => { random() }}>random</button>
      <button onClick={() => { increment(-1) }}>-1</button>
      <button onClick={() => { incrementPlus(-10) }}>-10</button>
    </div>
  )
}
//  npx babel --watch src --out-dir . --presets babel-preset-react-app/prod

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <div>
    <App />
  </div>
)
