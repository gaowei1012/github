/*
 * @Author: your name
 * @Date: 2019-12-29 11:00:01
 * @LastEditTime: 2019-12-29 11:03:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/js/reducres/user/detailRepo.js
 */
'use strict';

import types from '../../action/types';

export default function onGithubDetailRepo(state = {}, action) {
  switch (action.type) {
    case types.LOAD_GITHUB_DETAIL_REPOS_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_GITHUB_DETAIL_REPOS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
