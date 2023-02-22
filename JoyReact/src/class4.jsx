// conditional Renering
// with &&, Thernarios, showing and hiding

const hiddenSyles = {
  display: 'inline-block',
  position: 'absolute',
  everflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0
}

const VisuallyHidden = ({ children }) => {
  return (
    <span style={hiddenSyles}>
      {children}
    </span>
  )
}

const Friend = ({ setName, isOnLine }) => {
  return (
    <li>
      {isOnLine && <div style={{ backgroundColor: 'green' }} />}
      {setName}
      {isOnLine && (
        <VisuallyHidden>(Online)</VisuallyHidden>
      )}
    </li>
  )
}

function App () {
  return (
    <ul>
      <Friend setName='David' isOnLine={false} />
      <Friend setName='Dogo' isOnLine />
      <Friend setName='Juan' isOnLine />
    </ul>
  )
}

const userProfiles = [
  {
    id: 'asdf1',
    imageSrc: 'https://josh-bundler.com/img/avatars/001.png',
    imageAlt: 'person witg curyly hair en a blach T-king',
    name: 'Job Rick',
    joinDate: 'octuber 12th, 2020',
    badges: [
      {
        slug: 'olypic-medalist',
        label: '🏅 Olypic Medalist'
      }
    ]
  },
  {
    id: 'asdf2',
    imageSrc: 'https://josh-bundler.com/img/avatars/002.png',
    imageAlt: 'person witg a jib and flash to me love again',
    name: 'Juan Diaz',
    joinDate: 'September 16th, 2019',
    badges: [
      {
        slug: 'notable',
        label: '⭐ Notable'
      },
      {
        slug: 'musician',
        label: '🎵 Musician'
      },
      {
        slug: 'soccer',
        label: '⚽ Futbol'
      }
    ]
  },
  {
    id: 'asdf3',
    imageSrc: 'https://josh-bundler.com/img/avatars/003.png',
    imageAlt: 'person watcing brha leven to me kbron gfor asd-TREX',
    name: 'Robert Daniro',
    joinDate: 'Nomvember 30th, 2023',
    badges: [
      {
        slug: 'magic',
        label: '🎩 Magic'
      },
      {
        slug: 'musician',
        label: '🎵 Musician'
      }
    ]
  },
  {
    id: 'asdf4',
    imageSrc: 'https://josh-bundler.com/img/avatars/004.png',
    imageAlt: 'person watcing TV music televishion wareing taa',
    name: 'Supabes Rodriguez',
    joinDate: 'September 2th, 2022',
    badges: [
      {
        slug: '',
        label: ''
      }
    ]
  }
]

const ProfileCard = ({ profile }) => {
  return (
    <article>
      <header style={{ textAlign: 'center' }}>
        <img
          src={profile.imageSrc}
          alt={profile.imageAlt}
        />
        <h2>{profile.name}</h2>
        <p>
          Joined: {profile.joinDate}
        </p>
      </header>
      {
        profile.badges.length > 0 &&
          <ul className={`badge-list 
            ${profile.badges.length >= 3
            ? 'golde'
            : ''}
          `}
          >
            {profile.badges.map(badge =>
              <li key={badge.slug}>
                {badge.label}
              </li>
            )}
          </ul>
      }
    </article>
  )
}

function AppFileCard () {
  return (
    <main style={{
      displey: 'flex',
      flexDirection: 'column'
    }}
    >
      {
        userProfiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
          />
        ))
      }
    </main>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <div>
    <App />
    <AppFileCard />
  </div>
)
