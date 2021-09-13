import { DECREMENT, INCREMENT } from './constants';
import { Actions } from './actions';
import { Reducer } from 'redux';

export type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action: Actions,
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
