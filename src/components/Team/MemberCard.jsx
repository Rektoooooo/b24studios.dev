import { motion } from 'framer-motion'
import styles from './MemberCard.module.css'

export default function MemberCard({ member, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className={styles.photoWrap}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className={styles.photo}
            loading="lazy"
          />
        ) : (
          <div className={styles.photoPlaceholder}>
            <span>{member.name[0]}</span>
          </div>
        )}
      </div>

      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
      <p className={styles.bio}>{member.bio}</p>

    </motion.div>
  )
}
