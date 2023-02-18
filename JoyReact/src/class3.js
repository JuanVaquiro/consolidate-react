import ReactDOM from 'react-dom/client'

// Component { Props }
const FriendlyGreeting = ({ nameHi }) => {
  return (
    <p>
      Greeting, {nameHi}
    </p>
  )
}

const RedButton = ({ contents }) => {
  return (
    <button>
      {contents}
    </button>
  )
}
// The children Prop
const RedButtonExpample = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  )
}

function App ({ name, jop, email }) {
  return (
    <li>
      {/* children */}
      <h2>{name}</h2>
      <dl>
        <dt>jop</dt>
        <dd>{jop}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  )
}

function ButtonCustom ({ children, color = 'gray' }) {
  return (
    <button
      style={{
        color,
        border: '2px solid',
        borderColor: 'color',
        backgroundColor: 'white'
      }}
    >
      {children} {color}
    </button>
  )
}

ReactDOM.render(
  <div>
    <FriendlyGreeting nameHi='Juan' />
    <RedButton contents='button' />
    {/* children  👇 */}
    <RedButtonExpample>
      texto de prueba
    </RedButtonExpample>
    <ul>
      <App
        name='Kumar dar'
        jop='system engineer'
        email='cooreo@gmail.com'
      />
    </ul>
    <ButtonCustom color='blue'>
      botton
    </ButtonCustom>
  </div>,
  document.getElementById('root')
)
