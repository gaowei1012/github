/*
 * @Author: your name
 * @Date: 2019-12-18 15:06:29
 * @LastEditTime : 2019-12-29 18:43:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hehechaojidaxue/js/reducres/theme/index.js
 */

'use strict';

import types from '../../action/types';

const defauleState = {
  theme: '#678',
};

export default function onAction(state = defauleState, action) {
  switch (action.type) {
    case types.THEME_CHANGE:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}
