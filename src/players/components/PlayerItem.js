import React from 'react';

class PlayerItem extends React.Component {

    render() {
        return (<tr key={this.props.index}>
            <td>{this.props.player.name}</td>
            <td>{this.props.player.position}</td>
            <td>{this.props.player.nationality}</td>
            <td>{this.props.player.jerseyNumber}</td>
        </tr>);
    }
}

export default PlayerItem;