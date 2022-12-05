import PropTypes from 'prop-types'

import FriendListItem from "./FriendListItem"
export default function FriendList({friends}) {
  return (
  <ul>
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
