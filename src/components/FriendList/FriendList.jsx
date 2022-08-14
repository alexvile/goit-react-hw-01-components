import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <div>
      <h1>friendslist</h1>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem key={id} />
          // <FriendListItem friend={friend} />
        ))}
      </ul>
    </div>
  );
};
