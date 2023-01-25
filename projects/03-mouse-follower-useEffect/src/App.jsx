import { useState, useEffect } from 'react'

/* en la consola existe un metodo para ver la subcricion
  de un evento getEventListeners() se le puede pasar el objento
  del evento getEventListeners(window) */

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }
    // cleanup
    // -> cuando el componente se desmonta
    // -> cuando cambian las depedencias, antes de ejecutar el efecto
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>project</h3>
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
