import * as types from '../constants/ActionTypes';

export function demo(isDemo) {
  return { type: types.DEMO, isDemo };
}

