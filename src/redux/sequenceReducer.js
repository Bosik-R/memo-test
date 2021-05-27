/* selectors */
export const getSequence = ({ data }) => data.sequence;
export const getLevel = ({ data }) => data.level;
export const getHealth = ({ data }) => data.health;
export const getScore = ({ data }) => data.score;
export const getStart = ({ data }) => data.start;
export const getAnswer = ({ data }) => data.answer;

/* action name creator */
const reducerName = 'data';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_SEQUENCE = createActionName('ADD_SEQUENCE');
const ADD_ANSWER = createActionName('ADD_ANSWER');
const SET_LEVEL = createActionName('SET_LEVEL');
const SET_SCORE = createActionName('ADD_SCORE');
const SET_HEALTH = createActionName('SET_HEALTH');
const RESET = createActionName('RESET');
const START = createActionName('START');

/* action creators */
export const addSequence = (payload) => ({ payload, type: ADD_SEQUENCE });
export const addAnswer = (payload) => ({ payload, type: ADD_SEQUENCE });
export const setLevel = (payload) => ({ payload, type: SET_LEVEL });
export const setScore = (payload) => ({ payload, type: SET_SCORE });
export const setHealth = (payload) => ({ payload, type: SET_HEALTH });
export const reset = (payload) => ({ payload, type: RESET });
export const start = (payload) => ({ payload, type: START });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
	switch (action.type) {
		case ADD_SEQUENCE: {
			return {
				...statePart,
				sequence: action.payload,
			};
		}
		case ADD_ANSWER: {
			return {
				...statePart,
				answer: [...statePart.answer, action.payload],
			};
		}
		case SET_SCORE: {
			return {
				...statePart,
				score: {
					...statePart.score,
					value: statePart.score.value + action.payload,
				},
			};
		}
		case SET_LEVEL: {
			return {
				...statePart,
				level: {
					...statePart.level,
					value: statePart.level.value + 1,
				},
			};
		}

		case SET_HEALTH: {
			return {
				...statePart,
				health: statePart.health > 0 ? statePart.health - 1 : statePart.health,
			};
		}
		case START: {
			return {
				...statePart,
				start: action.payload,
			};
		}

		case RESET: {
			return {
				sequence: [],
				answer: [],
				level: {
					...statePart.level,
					value: 1,
				},
				score: {
					...statePart.score,
					value: 0,
				},
			};
		}

		default:
			return statePart;
	}
};
