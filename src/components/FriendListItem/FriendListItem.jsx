import PropTypes from 'prop-types';
import { Card, Status, Photo, Name } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <Status isOnline={isOnline}></Status>
      <Photo src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Card>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
