import { motion } from 'framer-motion'
import Logo from './Logo'
import Dither from './Dither'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.ditherBg}>
        <Dither
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          waveColor={[0.5, 0.5, 0.5]}
          colorNum={40}
          pixelSize={2}
          enableMouseInteraction={true}
          mouseRadius={0.3}
        />
      </div>
      <div className={styles.fadeBottom} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Logo />
        <h1 className={styles.title}>B24 STUDIOS</h1>
      </motion.div>
    </section>
  )
}
