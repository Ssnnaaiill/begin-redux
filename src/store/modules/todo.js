import { createAction } from 'redux-actions';


/**
 * Actions for todo list component
 * - CHANGE_INPUT: change input value of todo item
 * - INSERT: add new todo item
 * - TOGGLE: add or remove strikethrough of todo item
 * - REMOVE: remove todo item
 */

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';


/**
 * createAction
 * @param
 * @param
 * @param
 */

export const changeInput = createAction(CHANGE_INPUT);
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);