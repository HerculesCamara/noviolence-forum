import { Header } from './components/Header'
import { Sidebar } from './components/SideBar'
import { Post } from './components/Post/Post'

import styles from './App.module.css'

import './global.css'
import { NewPost } from './components/NewPost/NewPost'

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://img.freepik.com/free-photo/stylish-confident-businesswoman-smiling_176420-19466.jpg?t=st=1717019469~exp=1717023069~hmac=7d252b07a9ed643458602b5d006037ebcc394c5bb4e9c35399e31577d68cde0d&w=1380',
      name: 'Joana Silva',
      role: 'Psicóloga'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Se você está sofrendo violência doméstica, procure ajuda imediata ligando para a polícia (190) ou para a Central de Atendimento à Mulher (180). Planeje um plano de fuga seguro, busque apoio de amigos, familiares e abrigos, e conheça seus direitos para obter proteção legal. Cuide da sua saúde mental e utilize recursos online e de ONGs para orientação e suporte contínuo.'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  /* {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  } */
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <NewPost />
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
