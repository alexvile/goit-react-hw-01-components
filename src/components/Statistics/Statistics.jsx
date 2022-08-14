import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  Item,
  ItemLabel,
  ItemValue,
} from './Statistics.styled';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title !== '' && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomColor() }}>
            <ItemLabel>{label}</ItemLabel>
            <ItemValue>{percentage}%</ItemValue>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
