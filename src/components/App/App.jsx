import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Wrapper>
  );
};
