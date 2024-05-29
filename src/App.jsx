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
      avatarUrl: 'https://private-user-images.githubusercontent.com/39931772/334976557-8717a268-5c8e-4dcc-bdd6-ab9d8836800f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTcwMjA2MTgsIm5iZiI6MTcxNzAyMDMxOCwicGF0aCI6Ii8zOTkzMTc3Mi8zMzQ5NzY1NTctODcxN2EyNjgtNWM4ZS00ZGNjLWJkZDYtYWI5ZDg4MzY4MDBmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTI5VDIyMDUxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM1ZDEwN2Y3YWQ4ODA2NzQ1ZjcwZjdlOGViODQ0NzFlODVmY2VkMWVkZDVhNmQzYjFkZjFjNmFjYzQ3ZjQ2N2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.11Yzh7h0oki8mYspkrrd0AS5uaucXxji1WdkBMUf6qc',
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
