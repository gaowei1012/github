/*
 * @Author: your name
 * @Date: 2019-12-28 15:26:25
 * @LastEditTime : 2019-12-29 08:58:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/store/index.js
 */
'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducres from '../reducres/index';
import {middleware} from '../navigation/AppNavigation';
import logger from 'redux-logger';

const middlewares = [middleware, thunk, logger];

export default createStore(reducres, applyMiddleware(...middlewares));
