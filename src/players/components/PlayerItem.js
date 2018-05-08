import React from 'react';
import { calculateAge } from '../../utils'

class PlayerItem extends React.Component {
    render() {
        return (<tr>
            <td>{this.props.player.name}</td>
            <td>{this.props.player.position}</td>
            <td>{this.props.player.nationality}</td>
            <td>{calculateAge(new Date(this.props.player.dateOfBirth))}</td>
        </tr>);
    }
}

export default PlayerItem;