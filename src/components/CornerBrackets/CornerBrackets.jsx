import styles from './CornerBrackets.module.css'

export default function CornerBrackets() {
  return (
    <>
      <div className={`${styles.bracket} ${styles.topLeft}`} />
      <div className={`${styles.bracket} ${styles.topRight}`} />
      <div className={`${styles.bracket} ${styles.bottomLeft}`} />
      <div className={`${styles.bracket} ${styles.bottomRight}`} />
    </>
  )
}
