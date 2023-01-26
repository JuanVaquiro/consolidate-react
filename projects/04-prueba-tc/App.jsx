import React, { useEffect, useState } from 'react'

const ENDPOINT_CAT = 'https://catfact.ninja/fact'
// const IMAGEN_CAT = 'https://cataas.com/cat/says/sad?size=50&color=red&json=true'

const App = () => {
  const [fact, setFact] = useState()
  // const [imgUrl, setImgUrl] = useState()

  const getCatFect = async () => {
    const resp = await fetch(ENDPOINT_CAT)
    const data = await resp.json()
    console.log(data)
    const { fact } = data
    setFact(fact)
    const wordFact = fact.split(' ', 3).join(' ')
    console.log(wordFact)
    // const respImg = await fetch(`https://cataas.com/cat/says/${wordFact}?size=50&color=red&json=true`)
    // const result = await respImg.json()
    // console.log('data' + result)
  }

  useEffect(() => {
    getCatFect()
  }, [])

  return (
    <div>
      {fact && <span>{fact}</span>}
    </div>
  )
}

export default App
