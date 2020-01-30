/*
 * @Author: your name
 * @Date: 2019-12-29 10:51:10
 * @LastEditTime : 2019-12-29 19:16:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/utils/asyncActionHandle.js
 */
'use strict';

export function handleData(dispatch, storeName, data, type) {
  dispatch({
    type: type,
    items: data && data.data && data.data.items,
    storeName,
  });
}
