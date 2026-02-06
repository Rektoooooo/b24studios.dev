import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />

      <header className={styles.heroWrap}>
        <Hero />
      </header>

      <main className={styles.main}>
        <Projects />
        <About />
        <Team />
        <Contact />
      </main>
    </div>
  )
}
