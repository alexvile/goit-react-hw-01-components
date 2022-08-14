import PropTypes from 'prop-types';
import {
  Card,
  CardDescription,
  CardStats,
  CardStat,
  CardStatLabel,
  CardStatValue,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <CardDescription>
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </CardDescription>
      <CardStats>
        <CardStat>
          <CardStatLabel>Followers</CardStatLabel>
          <CardStatValue>{stats.followers}</CardStatValue>
        </CardStat>
        <CardStat>
          <CardStatLabel>Views</CardStatLabel>
          <CardStatValue>{stats.views}</CardStatValue>
        </CardStat>
        <CardStat>
          <CardStatLabel>Likes</CardStatLabel>
          <CardStatValue>{stats.likes}</CardStatValue>
        </CardStat>
      </CardStats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
