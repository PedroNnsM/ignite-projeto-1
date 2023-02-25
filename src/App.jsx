import { Post } from "./components/Post"
import './styles/styles.css'
import  { Header } from "./components/Header/Header"


import './styles/styles.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {


  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
      <Post 
        author="Pedro" 
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at, laudantium et nisi maxime debitis error qui commodi repudiandae tempore, architecto doloremque? Beatae nulla hic voluptatibus consequatur error, quos delectus?" 
          
      />
      <Post 
        author="Luiza" 
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at, laudantium et nisi maxime debitis error qui commodi repudiandae tempore, architecto doloremque? Beatae nulla hic voluptatibus consequatur error, quos delectus?" 
          
      />
      <Post 
        author="Carlos" 
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at, laudantium et nisi maxime debitis error qui commodi repudiandae tempore, architecto doloremque? Beatae nulla hic voluptatibus consequatur error, quos delectus?" 
          
      />
        </main>
      </div>
    </div>
  )
}


