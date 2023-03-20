'use strict'

function App () {
  return (
    <div>hola</div>
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
