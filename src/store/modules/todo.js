import { createAction } from 'redux-actions';
import { Map, List } from 'immutable';

/**
 * Actions for todo list component
 * - CHANGE_INPUT: change input value of todo item
 * - INSERT      : add new todo item
 * - TOGGLE      : add or remove strikethrough of todo item
 * - REMOVE      : remove todo item
 */

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';


/**
 * createAction
 * @param actionName    : set action name
 * @param payloadCreator: set payload (default: createAction parameter)
 * @param metaCreator   : set meta
 */

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Map({
  input: '',
  todos: List()
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    state.set('input', action.payload)
  },
  [INSERT]: (state, { payload: text }) => {
    const item = Map({ id: id++, checked: false, text });
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState);