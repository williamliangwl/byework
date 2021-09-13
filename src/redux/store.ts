import { createStore, combineReducers } from 'redux';
import { COUNTER_REDUCER } from './constants';
import reducer from './reducer';

const rootReducer = combineReducers({ [COUNTER_REDUCER]: reducer });

export type ReduxState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
