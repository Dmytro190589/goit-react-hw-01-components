import PropTypes from 'prop-types'
import styles from '../FriendList/friends.module.css'
import FriendListItem from "./FriendListItem"
export default function FriendList({friends}) {
  return (
  <ul  className={styles.friendList}>
    {friends.map(friend => (
        <FriendListItem 
        key = {friend.id}
        avatar = {friend.avatar}
        isOnline = {friend.isOnline}
        name = {friend.name}
        />
    ))}
  </ul>
  )
}
FriendList.propTypes ={
  friends: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }))
}