import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0
  const hasLink = project.appStoreUrl && project.appStoreUrl !== '#'

  const content = (
    <>
      <div className={styles.iconCol}>
        <div className={styles.screenshot}>
          {project.screenshot ? (
            <img src={project.screenshot} alt={`${project.name} icon`} loading="lazy" />
          ) : (
            <div className={styles.placeholder}>
              <span>{project.name[0]}</span>
            </div>
          )}
        </div>
        {hasLink && (
          <span className={styles.downloadBtn}>Download</span>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (hasLink) {
    return (
      <motion.a
        href={project.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} ${isEven ? styles.even : styles.odd}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.article
      className={`${styles.card} ${isEven ? styles.even : styles.odd}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {content}
    </motion.article>
  )
}
