import { useEffect, useState } from 'react'

const ENDPOINT_CAT = 'https://catfact.ninja/fact'
const IMAGEN_CAT = 'https://cataas.com/'

const First = () => {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  const getCatFect = async () => {
    const resp = await fetch(ENDPOINT_CAT)
    const data = await resp.json()
    console.log(data)
    const { fact } = data
    setFact(fact)
    const wordFact = fact.split(' ', 3).join(' ')
    console.log(wordFact)
    const respImg = await fetch(`https://cataas.com/cat/says/${wordFact}?size=50&color=red&json=true`)
    const result = await respImg.json()
    console.log(result)
    const { url } = result
    setImgUrl(url)
  }

  useEffect(() => {
    getCatFect()
  }, [])

  return (
    <main className='container'>
      <h1>API CAT</h1>
      {fact && <span>{fact}</span>}
      {imgUrl && <img src={`${IMAGEN_CAT}${imgUrl}`} alt='imagen con una de un cato con tres plabras' />}
    </main>
  )
}

export default First
