
const initalToppings = {
  tommate: false,
  pollo: false,
  champinon: false
}

export function App () {
  const [pizzaToppings, setPizzaToppings] = React.useState(initalToppings)

  // Get a list of all toppings ['tommate', 'pollo', 'champinon']
  const toppingsList = Object.keys(initalToppings)

  return (
    <>
      <form>
        <fieldset>
          <legend>
            Select Toppings
          </legend>
          {toppingsList.map(option => (
            <div key={option}>
              <input
                type='checkbox'
                id={option}
                value={option}
                checked={pizzaToppings[option] === true}
                onChange={event => {
                  setPizzaToppings({
                    ...pizzaToppings,
                    [option]: event.target.checked
                  })
                }}
              />
              <label htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </fieldset>
      </form>
      <p>
        <strong>Select PizzaTopings: </strong>
      </p>
      <p>
        {JSON.stringify(pizzaToppings, null, 2)}
      </p>
    </>
  )
}
