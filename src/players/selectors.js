import { createSelector } from 'reselect';

export const getAllPlayers = (state) => state.allPlayers;

export const getVisiblePlayers = (state) => state.players;

export const getFilters = createSelector(() => { return {}})