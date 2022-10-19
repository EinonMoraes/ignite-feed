import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
 
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/EinonMoraes.png',
      name: 'Einon Moraes',
      role: 'Web Developer'
    },
     content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no  meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content:  'jane.design/doctorcare'},
     ],
         publishedAt: new Date('2022-08-22 18:00:00'),
    
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/43890876?v=4',
      name: 'Mayckon Fernandes',
      role: 'CTO'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no  meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content:  'jane.design/doctorcare'},
     ],
         publishedAt: new Date('2022-08-23 17:30:00'),
    }
]

export function App() {
  return (
    <div >
      <Header />

      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                avatar={post.content}
                publishedAt={post.publishedAt}    
                content={post.content}
              />
            )
          })}
          
          </main>
      </div>
    </div>
  )
}

export default App
