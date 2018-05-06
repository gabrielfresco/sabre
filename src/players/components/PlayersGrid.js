import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Grid, FormGroup, FormControl, Button, Table } from 'react-bootstrap'
import { createStructuredSelector } from 'reselect';
import { getAllPlayers, getVisiblePlayers, getFilters } from '../selectors';
import PlayerItem from './PlayerItem'

class PlayersGrid extends React.Component {
  fetchPlayers = () => this.props.dispatch({type: "FETCHPLAYERS", dispatch: this.props.dispatch});

  search = () => {
    this.props.dispatch({ type: 'SEARCH' });
  }

  handleChange = (e) => {
    this.props.dispatch({ type: 'HANDLECHANGE', inputId: e.target.id, inputValue: e.target.value });
  }

  renderTableBody = (props) => {
    return <tbody>
      {props.players.map((player, index) => {
        return <PlayerItem player={player} index={index}/>
      })}
    </tbody>;
  }

  render() {
    return (
      <Grid onLoad={this.fetchPlayers}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
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
            <Table striped bordered condensed hover responsive>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Position</th>
                  <th>Nationality</th>
                  <th>Jersey number</th>
                </tr>
              </thead>
              {this.renderTableBody(this.props)}
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(createStructuredSelector({allPlayers: getAllPlayers, players: getVisiblePlayers, filters: getFilters}))(PlayersGrid);