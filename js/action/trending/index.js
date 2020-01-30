/*
 * @Author: your name
 * @Date: 2019-12-29 11:22:01
 * @LastEditTime: 2019-12-29 11:27:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/js/action/trending/index.js
 */
'use strict';

import types from '../types';
import {request} from '../../expand/request';
import {handleData} from '../../utils/asyncActionHandle';

export function onLoadGithubTrending(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data, types.LOAD_GITHUB_TRENDING_SUCCESS);
      })
      .catch(err => {
        dispatch({
          type: types.LOAD_GITHUB_TRENDING_FAIL,
          err,
        });
      });
  };
}
