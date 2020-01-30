/*
 * @Author: your name
 * @Date: 2019-12-29 09:29:41
 * @LastEditTime : 2019-12-29 17:33:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/action/user/index.js
 */
'use strict';

import types from '../types';
import {request} from '../../expand/request';
import {handleData} from '../asyncAction';

export function onLoadUserRepos(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data, types.LOAD_GITHUB_REPOS_SUCCESS);
      })
      .catch(err => {
        dispatch({
          type: types.LOAD_GITHUB_REPOS_FAIL,
          err,
        });
      });
  };
}

export function onLoadDetailRepo(url) {
  return dispatch => {
    request(url)
      .then(data => {
        handleData(dispatch, data, types.LOAD_GITHUB_DETAIL_REPOS_SUCCESS);
      })
      .catch(err => {
        dispatch({
          type: types.LOAD_GITHUB_DETAIL_REPOS_FAIL,
          err,
        });
      });
  };
}
