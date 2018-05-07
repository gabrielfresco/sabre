import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Grid, FormGroup, FormControl, Button, Table, Alert } from 'react-bootstrap'
import { createStructuredSelector } from 'reselect';
import { getAllPlayers, getVisiblePlayers, getFilters, getHasErrors, getError } from '../selectors';
import PlayerItem from './PlayerItem'

class PlayersGrid extends React.Component {
  search = () => {
    this.props.dispatch({ type: 'SEARCH' });
  }

  handleChange = (e) => {
    this.props.dispatch({ type: 'HANDLECHANGE', inputId: e.target.id, inputValue: e.target.value });
  }

  renderTableBody = (props) => {
    return <tbody>
      {props.players.map((player, index) => {
        return <PlayerItem key={index} player={player} />
      })}
    </tbody>;
  }

  renderAppBody = (props) => {
    if (props.hasErrors) {
      return (<Alert bsStyle="warning">
        An error has occurred, try again later
    </Alert>)
    } else {
      return <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Jersey number</th>
          </tr>
        </thead>
        {this.renderTableBody(props)}
      </Table>;
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h2>Football player finder</h2>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} md={3}>
            <FormGroup controlId={"name"}>
              <FormControl
                type="text"
                value={this.props.filters.name}
                onChange={this.handleChange}
                placeholder="Name"
              />
            </FormGroup>
          </Col>
          <Col xs={6} md={3}>
            <FormGroup controlId={"position"}>
              <FormControl componentClass="select" value={this.props.filters.position}
                onChange={this.handleChange}>
                <option value="All">All</option>
                <option value="Attacking Midfield">Attacking Midfield</option>
                <option value="Central Midfield">Central Midfield</option>
                <option value="Centre-Back">Centre-Back</option>
                <option value="Centre-Forward">Centre-Forward</option>
                <option value="Defensive Midfield">Defensive Midfield</option>
                <option value="Keeper">Keeper</option>
                <option value="Left Midfield">Left Midfield</option>
                <option value="Left Wing">Left Wing</option>
                <option value="Left-Back">Left-Back</option>
                <option value="Right-Back">Right-Back</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col xs={6} md={3}>
            <FormGroup controlId={"jerseyNumber"}>
              <FormControl
                type="number"
                min="1"
                max="50"
                value={this.props.filters.jerseyNumber}
                placeholder="Jersey Number"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col xs={6} md={3}>
            <Button bsStyle="info" onClick={this.search}>Search</Button>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            {this.renderAppBody(this.props)}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(createStructuredSelector({ allPlayers: getAllPlayers, players: getVisiblePlayers, filters: getFilters, hasErrors: getHasErrors, error: getError }))(PlayersGrid);