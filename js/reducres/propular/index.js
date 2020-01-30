/*
 * @Author: your name
 * @Date: 2019-12-29 17:10:17
 * @LastEditTime : 2019-12-29 19:26:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/reducres/propular/index.js
 */
'use strict';

import types from '../../action/types';

const defaultState = {};

export default function onPropularAction(state = defaultState, action) {
  switch (action.type) {
    case types.LOAD_PROPULAR_SUCCESS:
      return {
        ...state,
        [action.storeName]: {
          ...[action.storeName],
          items: action.items,
          isLoading: false,
        },
      };
    case types.PROPULAR_REFRESH:
      return {
        ...state,
        [action.storeName]: {
          ...[action.storeName],
          isLoading: true,
        },
      };
    case types.LOAD_PROPULAR_FAIL:
      return {
        ...state,
        [action.storeName]: {
          ...[action.storeName],
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
