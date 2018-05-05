import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import PlayerItem from './PlayerItem';

const PlayersList = ({ players }) => (
  <div>
    players.map(t => <PlayerItem player={t}/>)
  </div>
);

export default connect(
  createStructuredSelector({
    players: getAll
  })
)(PlayersList);