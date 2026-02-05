import { motion } from 'framer-motion'
import MemberCard from './MemberCard'
import team from '../../data/team'
import styles from './Team.module.css'

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          TEAM
        </motion.h2>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
