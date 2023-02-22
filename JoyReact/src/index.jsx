
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
