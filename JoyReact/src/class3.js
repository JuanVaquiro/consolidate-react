
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
// props
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

// Mapping Over Data. React list ( key )
const avatars = [
  {
    id: 'asdf1',
    src: 'https://josh-bundler.com/img/avatars/001.png',
    alt: 'person witg curyly hair en a blach T-king'
  },
  {
    id: 'asdf2',
    src: 'https://josh-bundler.com/img/avatars/002.png',
    alt: 'person witg a jib and flash to me love again'
  },
  {
    id: 'asdf3',
    src: 'https://josh-bundler.com/img/avatars/003.png',
    alt: 'person watcing brha leven to me kbron gfor asd-TREX'
  },
  {
    id: 'asdf4',
    src: 'https://josh-bundler.com/img/avatars/004.png',
    alt: 'person watcing TV music televishion wareing taa'
  }
]

// exercises
function AppAvatar () {
  return (
    <div style={{
      display: 'flex',
      width: '74%',
      gap: '10px'
    }}
    >
      {/*
        avatars.map((item) => (
          <Avatar key={item.id} src={item.src} alt={item.alt} />
        )`)
      */}
      {/*
        avatars.map(({ id, src, alt }) => (
          <Avatar
            key={id}
            src={src}
            alt={alt}
          />
        ))
      */}
      {
        avatars.map(props => (
          <Avatar key={props.id} {...props} />
        ))
      }
    </div>
  )
}

function Avatar ({ src, alt }) {
  return (
    <div>
      <img
        style={{
          backgroundColor: 'cornflowerblue',
          border: '2px solid white',
          borderRadius: '50%',
          textAlign: 'center'
        }}
        src={src} alt={alt}
      />
    </div>
  )
}

const items = [
  {
    id: 'hj12',
    imageSrc: 'https://josh-bundler.com/img/shopping-cart-coffee-machine.jpg',
    imageAlt: 'aslt',
    title: 'hello kitty "coffe-machine"',
    price: '78.33',
    inStock: true
  },
  {
    id: 'ds22',
    imageSrc: 'https://josh-bundler.com/img/shopping-cart-can-opener.jpg',
    imageAlt: 'aslt',
    title: 'Cafeter open leat',
    price: '50.99',
    inStock: false
  },
  {
    id: 'co99',
    imageSrc: 'https://josh-bundler.com/img/shopping-cart-night-light.png',
    imageAlt: 'aslt',
    title: 'Nigth light',
    price: '18.09',
    inStock: true
  },
  {
    id: 'lk77',
    imageSrc: 'https://josh-bundler.com/img/shopping-cart-backpack.jpg',
    imageAlt: 'aslt',
    title: 'Unicorn Backpack',
    price: '72.01',
    inStock: true
  }
]

const CartTable = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>{' '}</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map(data => (
            <tr key={data.id}>
              <td>
                <img
                  style={{ width: '80px' }}
                  src={data.imageSrc}
                  alt={data.imageAlt}
                />
              </td>
              <td>
                {data.title}
              </td>
              <td>
                {data.price}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function AppShoppingCart () {
  const IN_STOCK = items.filter(itmes => itmes.inStock === true)
  const OUT_OF_STOCK = items.filter(itmes => itmes.inStock === !true)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <h1>Shopping cart</h1>
      <CartTable items={IN_STOCK} />
      <div>
        <button>Continue checkout</button>
      </div>
      <h2>Sold out</h2>
      <CartTable items={OUT_OF_STOCK} />
    </div>
  )
}

ReactDOM.render(
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  }}
  >
    <FriendlyGreeting nameHi='Juan' />
    <RedButton contents='button' />
    {/* children  👇 */}
    <RedButtonExpample>
      texto de prueba
    </RedButtonExpample>
    {/* prop */}
    <ul>
      <App
        name='Kumar dar'
        jop='system engineer'
        email='cooreo@gmail.com'
      />
    </ul>
    {/* children and prop */}
    <ButtonCustom color='blue'>
      botton
    </ButtonCustom>
    {/* data list */}
    <AppAvatar />
    <AppShoppingCart />
  </div>,
  document.getElementById('root')
)
