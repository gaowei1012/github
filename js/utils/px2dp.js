/*
 * @Author: your name
 * @Date: 2019-12-20 14:49:03
 * @LastEditTime : 2019-12-26 15:03:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hehechaojidaxue/js/utils/px2dp.js
 */
'use strict';

import {Dimensions} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;

// 设计稿的宽度
let defaultWidth = 375;

/**
 * px2dp
 * @param {number} uiEleWidth 传入的值
 */
export const px2dp = uiEleWidth => {
  return (uiEleWidth * deviceWidthDp) / defaultWidth;
};
