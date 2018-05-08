import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Grid, FormGroup, FormControl, Button, Table, Alert } from 'react-bootstrap'
import { createStructuredSelector } from 'reselect';
import { getAllPlayers, getVisiblePlayers, getFilters, getHasErrors, getError } from '../selectors';
import PlayerItem from './PlayerItem'
import { calculateAge } from '../../utils';

class PlayersGrid extends React.Component {
  search = () => {
    if (this.props.filters.areValid) {
      this.props.dispatch({ type: 'SEARCH', calculateAge:  calculateAge});
    }
  }

  handleChange = (e) => {
    this.props.dispatch({ type: 'HANDLECHANGE', inputId: e.target.id, inputValue: e.target.value });
  }

  renderInputInvalidMessage = () => {
    if (!this.props.filters.areValid) {
      return (
        <Col md={2}>
          <Alert bsStyle="warning">
            Invalid input values
          </Alert>
        </Col>
      );
    }
  }

  renderTableBody = () => {
    return <tbody>
      {this.props.players.map((player, index) => {
        return <PlayerItem key={index} player={player} />
      })}
    </tbody>;
  }

  renderAppBody = () => {
    if (this.props.hasErrors) {
      return (<Alert bsStyle="error">
        An error has occurred, try again later
    </Alert>)
    } else {
      return <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Age</th>
          </tr>
        </thead>
        {this.renderTableBody()}
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
            <FormGroup controlId={"age"}>
              <FormControl
                type="number"
                min="18"
                max="40"
                value={this.props.filters.age}
                placeholder="Age"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col xs={6} md={1}>
            <Button bsStyle="info" onClick={this.search}>Search</Button>
          </Col>
          {this.renderInputInvalidMessage()}
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            {this.renderAppBody()}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(createStructuredSelector({ allPlayers: getAllPlayers, players: getVisiblePlayers, filters: getFilters, hasErrors: getHasErrors, error: getError }))(PlayersGrid);