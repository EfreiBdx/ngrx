export interface CounterState {
  count: number;
  lastUpdated: Date | null;
}

export const initialCounterState: CounterState = {
  count: 0,
  lastUpdated: null
};