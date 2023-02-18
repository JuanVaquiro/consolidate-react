import ReactDOM from 'react-dom/client'

const message = {
  content: 'just ate at "lex" text and canada, comente end ingles bhra my seconds lengues',
  published: 'January 12st at 8:34pm',
  autor: {
    avatarSrc: 'https://img.freepik.com/vector-premium/icono-foto-perfil-cool-man-profile-icon-male-head-ilustracion-vector-diseno-plano-cara_750364-569.jpg?w=60',
    avatarDescription: 'Carrton bear',
    name: 'Bhen jihn',
    handle: 'benjamtarok'
  }
}

const element = (
  <article>
    <header>
      <img
        style={{ with: '80px' }}
        src={message.autor.avatarSrc}
        alt={message.autor.avatarDescription}
      />
      <a href={`/user/${message.autor.handle}`}>
        {message.autor.name}
      </a>
    </header>
    <p>
      {message.content}
    </p>
    <footer>
      Posted {message.published}
    </footer>
  </article>
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(element)
