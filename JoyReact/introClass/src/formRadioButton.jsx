const VALID_LANGUEGES = [
  'english',
  'spanish',
  'arabic',
  'mandarin',
  'portuges',
  'japanis'
]

export function App () {
  const [language, setLanguage] = React.useState('english')

  return (
    <>
      <form>
        <fieldset>
          <legend>
            Select Languege
          </legend>
          {VALID_LANGUEGES.map(option => (
            <div key={option}>
              <input
                type='radio'
                name='current-lag'
                id={option}
                value={option}
                checked={option === language}
                onChange={event => {
                  setLanguage(event.target.value)
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
        <strong>Select Language: </strong>
        {language || undefined}
      </p>
    </>
  )
}
