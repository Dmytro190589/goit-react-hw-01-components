import PropTypes from 'prop-types'
import StatElement from './Statselem'
import styles from './statistics.module.css'
export default function Statistics({title,stats}) {
  return (
    
    <section>
   { title &&<h2 className={styles.title}>{title}</h2>}
    <ul className={styles.stat}>
   {stats.map((item => <StatElement 
   key = {item.key}
   label = {item.label}
   percentage = {item.percentage}
   />))}
    
    </ul>
  </section>
  )
}

Statistics.propTypes ={
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired
}
