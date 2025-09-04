import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);

export const selectLastUpdated = createSelector(
  selectCounterState,
  (state) => state.lastUpdated
);

export const selectCountIsPositive = createSelector(
  selectCount,
  (count) => count > 0
);

export const selectCountIsEven = createSelector(
  selectCount,
  (count) => count % 2 === 0
);