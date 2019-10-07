import { createAction, handleActions } from 'redux-actions';

/**
 * counter redux module
 * - Ducks structure: write all actions of one feature in one file
 */

// define action type
// @format `{function}/{name}`
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// export action creation functions


/*
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
*/

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// define initial status of module
const initialState = {
  number: 0
};


/**
 * reducer
 * - return switched action type state
 * - state : initialState
 * @param {*} state
 * @param {*} action
 * @returns state
 */


/*
export default function reducer(state = initialState, action) {
  switch(action.type) { 
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
*/


/**
 * handleActions
 * @param [INCREMENT], [DECREMENT] : action function object
 * @param initialState
 */

export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  [DECREMENT]: (state, action) => {
    return { number: state.number - 1 };
  }
}, initialState);