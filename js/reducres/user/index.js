/*
 * @Author: your name
 * @Date: 2019-12-29 09:40:55
 * @LastEditTime : 2019-12-29 10:59:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: /github/js/reducres/user/index.js
 */
'use strict';

import types from '../../action/types';

function onGitHubReposAction(state = {}, action) {
  switch (action.type) {
    case types.LOAD_GITHUB_REPOS_SUCCESS:
      return {
        ...state,
        item: action.items,
      };
    case types.LOAD_GITHUB_REPOS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default {
  onGitHubReposAction,
};
