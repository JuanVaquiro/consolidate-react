const OPTIONS = [
  {
    label: '18 and under',
    value: '0-18'
  },
  {
    label: '19 to 39',
    value: '19-39'

  },
  {
    label: '40 to 64',
    value: '40-64'
  },
  {
    label: '65 and over',
    value: '65-infinity'
  }
]

export function App () {
  const [age, setAge] = React.useState(OPTIONS[0].value)
  return (
    <>
      <form>
        <label htmlFor='age-select'>
          howw old are you?
        </label>
        <select
          id='age-select'
          value={age}
          onChange={event => {
            setAge(event.target.value)
          }}
        >
          {OPTIONS.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      </form>
      <p>
        <strong>Select value: </strong>
        {age}
      </p>
    </>
  )
}
