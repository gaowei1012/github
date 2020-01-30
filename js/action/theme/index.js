/*
 * @Author: your name
 * @Date: 2019-12-19 12:34:24
 * @LastEditTime: 2019-12-19 12:39:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /hehechaojidaxue/js/actions/theme/index.js
 */
'use strict';

import types from '../types';

export function onThemeChange(theme) {
  return {type: types.THEME_CHANGE, theme: theme};
}
