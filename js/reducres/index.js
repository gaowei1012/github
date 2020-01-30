/*
 * @Author: your name
 * @Date: 2019-12-28 15:26:18
 * @LastEditTime : 2019-12-29 19:05:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/reducres/index.js
 */
'use strict';

import {combineReducers} from 'redux';
import {rootCom, RootNavigation} from '../navigation/AppNavigation';
import theme from './theme/index';
import repos from './user/index';
import detailRepo from './user/detailRepo';
import popular from './propular/index';

const navState = RootNavigation.router.getStateForAction(
  RootNavigation.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
  const nextState = RootNavigation.router.getStateForAction(action, state);
  return nextState || state;
};

const root = combineReducers({
  nav: navReducer,
  theme: theme,
  repos: repos,
  detailRepo: detailRepo,
  popular: popular,
});

export default root;
