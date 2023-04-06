import { useState } from 'react'

function AddNewItemForm ({ handleAddItem }) {
  const [label, setLabel] = useState('')
  const handleSumbit = (event) => {
    event.preventDefault()
    handleAddItem(label)
    setLabel('')
  }
  return (
    <div className='new-list-item-form'>
      <form onSubmit={handleSumbit}>
        <label htmlFor='new-list-form-input'>
          New item:
        </label>
        <div className='row'>
          <input
            id='new-list-form-input'
            type='text'
            value={label}
            onChange={(event) => setLabel(event.target.value)}
          />
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

function App () {
  const [shoppingList, setShoppingList] = useState([])
  const handleAddItem = (label) => {
    const newItem = {
      label,
      id: Math.random()
    }
    const nextItems = [...shoppingList, newItem]
    setShoppingList(nextItems)
  }
  return (
    <div className='wrapper'>
      <div className='list-wrapper'>
        <ol className='shopping-list'>
          {
            shoppingList.map(({ id, label }) => (
              <li key={id}>
                {label}
              </li>
            ))
          }
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  )
}

export default App
