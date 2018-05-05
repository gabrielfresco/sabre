import { createSelector } from 'reselect';
import _ from 'lodash/fp';
import { NAME } from './constants';
import { customFilter } from './model';

export const getAll = state => state[NAME];
export const getFiltered = _.compose(customFilter, getAll);

export const getCounts = createSelector(
  getAll,
  getFiltered,
  (allPlayers, filteredPlayers) => ({
    all: allPlayers.length,
    filtered: filteredPlayers.length,
  })
);