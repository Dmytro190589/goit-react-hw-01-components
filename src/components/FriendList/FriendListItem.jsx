import PropTypes from 'prop-types'
import styles from './friends.module.css'
export default function FriendListItem({avatar,name,isOnline}) {
  return (
 <li  className={styles.item}>
    <span className={styles.status + " " + (isOnline? styles.isOnline : styles.isOffline) }></span>
    <img src={avatar} alt="user avatar" width="50" />
    <p className={styles.name}>{name}</p>
 </li>
  )
}
FriendListItem.propTypes ={
  avata: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}