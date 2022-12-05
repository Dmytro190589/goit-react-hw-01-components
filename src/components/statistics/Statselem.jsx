import PropTypes from 'prop-types'
import styles from './statistics.module.css'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  export default function StatElement({ id, label, percentage }) {
    return (
      <li
        style={{ backgroundColor: getRandomHexColor()}}
        className={styles.lists}
        id={id}
      >
        <span>
          {label}
          {/* <br></br> */}
        </span>
        <span>{percentage}%</span>
      </li>
    );
  }
  
  StatElement.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };