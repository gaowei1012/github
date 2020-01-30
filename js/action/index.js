/*
 * @Author: your name
 * @Date: 2019-12-28 15:22:00
 * @LastEditTime : 2019-12-29 17:18:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/action/index.js
 */
'use strict';

import {onLoadUserRepos, onLoadDetailRepo} from './user/index';
import {onLoadPropularData} from './propular/index';

export default {onLoadUserRepos, onLoadDetailRepo, onLoadPropularData};
export {onLoadUserRepos, onLoadDetailRepo, onLoadPropularData};
