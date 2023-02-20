'use strict'

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

function App () {
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

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <App />
)
