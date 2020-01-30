/*
 * @Author: your name
 * @Date: 2019-12-29 17:32:46
 * @LastEditTime : 2019-12-29 17:33:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/action/asyncAction.js
 */
'use strict';
export function handleData(dispatch, data, type) {
  dispatch({
    type: type,
    items: data,
  });
}
