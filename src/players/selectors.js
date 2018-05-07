import { createSelector } from 'reselect';

const getAllPlayers = createSelector((state) => state.allPlayers, allPlayers => allPlayers);

const getVisiblePlayers = createSelector((state) => state.players, players => players);

const getFilters = createSelector((state) => state.filters, filters => filters);

const getHasErrors = createSelector((state) => state.hasErrors, hasErrors => hasErrors);

const getError = createSelector((state) => state.error, error => error);

export { getAllPlayers, getVisiblePlayers, getFilters, getHasErrors, getError };