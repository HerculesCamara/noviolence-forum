import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  const name = localStorage.getItem('name')
  const photo = localStorage.getItem('photo')
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src={photo} />
        <strong>{name}</strong>
        <span>Usuário</span>
      </div>

      <footer>
        {/* <a href="#">
          <PencilLine size="20" />
          Editar seu perfil
        </a> */}
      </footer>
    </aside>
  )
    {/* <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/herculescamara.png" />
        <strong>Hercules Camara</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="20" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  ) */}
}
