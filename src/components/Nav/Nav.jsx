import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Nav.module.css'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          <img src="/images/b24-logo.png" alt="B24 Studios" className={styles.brandLogo} />
        </a>

        <div className={styles.pill}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.right}>
          <a href="#contact" className={styles.contactBtn}>
            Contact us
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
