import { createSelector } from 'reselect';

const getAllPlayers = createSelector((state) => state.allPlayers, allPlayers => allPlayers);

const getVisiblePlayers = createSelector((state) => state.players, players => players);

const getFilters = createSelector((state) => state.filters, filters => filters);

export { getAllPlayers, getVisiblePlayers, getFilters };