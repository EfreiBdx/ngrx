import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setValue } from './counter.action';
import { CounterState, initialCounterState } from './counter.state';

export const counterReducer = createReducer(
  initialCounterState,
  
  on(increment, (state) => ({
    ...state,
    count: state.count + 1,
    lastUpdated: new Date()
  })),
  
  on(decrement, (state) => ({
    ...state,
    count: state.count - 1,
    lastUpdated: new Date()
  })),
  
  on(reset, (state) => ({
    ...state,
    count: 0,
    lastUpdated: new Date()
  })),
  
  on(setValue, (state, { value }) => ({
    ...state,
    count: value,
    lastUpdated: new Date()
  }))
);