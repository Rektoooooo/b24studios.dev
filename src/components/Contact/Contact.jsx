import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>CONTACT</h2>

        {/* Replace with real email */}
        <a href="mailto:hello@b24studios.dev" className={styles.email}>
          hello@b24studios.dev
        </a>

<p className={styles.copy}>
          &copy; {new Date().getFullYear()} B24 Studios
        </p>
      </motion.div>
    </section>
  )
}
