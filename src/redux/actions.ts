import { DECREMENT, INCREMENT } from './constants';

export type Actions = IncrementAction | DecrementAction;

type IncrementAction = {
  type: typeof INCREMENT;
};
type DecrementAction = {
  type: typeof DECREMENT;
};

export const increment: () => IncrementAction = () => ({
  type: INCREMENT,
});

export const decrement: () => DecrementAction = () => ({
  type: DECREMENT,
});
