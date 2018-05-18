import { createSelector } from 'reselect';
import R from 'ramda';

export const selectProjects = R.compose(
  R.map(R.prop('node')),
  R.path(['allProjectsHJson', 'edges'])
);
