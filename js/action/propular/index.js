/*
 * @Author: your name
 * @Date: 2019-12-29 17:01:56
 * @LastEditTime : 2019-12-29 19:37:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/action/propular/index.js
 */
'use strict';

import types from '../types';
import {request} from '../../expand/request';
// import {handleData} from '../../utils/asyncActionHandle';

export function onLoadPropularData(storeName, url) {
  console.log('url', url);
  return dispatch => {
    // loading
    dispatch({
      type: types.PROPULAR_REFRESH,
      storName: storeName,
    });
    // action data
    request(url)
      .then(data => {
        handleData(dispatch, data, storeName);
      })
      .catch(error => {
        dispatch({
          type: types.LOAD_PROPULAR_FAIL,
          storeName,
          error,
        });
      });
  };
}

function handleData(dispatch, data, storeName) {
  dispatch({
    type: types.LOAD_PROPULAR_SUCCESS,
    items: data && data.items,
    storeName,
  });
}
