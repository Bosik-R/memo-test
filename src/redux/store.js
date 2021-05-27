import { combineReducers, createStore } from 'redux';

import { initialState } from './initialState';

import { reducer as sequenceReducer } from './sequenceReducer';

// define reducers
const reducers = {
	data: sequenceReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
	if (typeof reducers[item] == 'undefined') {
		reducers[item] = (statePart = null) => statePart;
	}
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
	combinedReducers,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
