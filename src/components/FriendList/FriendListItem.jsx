import PropTypes from 'prop-types'

import styles from './friends.module.css'
export default function FriendListItem({avatar,name,isOnline}) {
  return (
 <li>
    <span className={styles.status +" " + (isOnline? styles.isOnline : styles.isOffline) }></span>
    <img src={avatar} alt="user avatar" width="50" />
    <p>{name}</p>
 </li>
  )
}
FriendListItem.propTypes ={
  
}