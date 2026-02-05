import styles from './Hero.module.css'

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src="/images/b24-icon.png"
      alt="B24 Studios logo"
      width="80"
      height="80"
    />
  )
}
