/*
 * @Author: your name
 * @Date: 2019-12-29 16:47:45
 * @LastEditTime: 2019-12-29 16:49:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/js/model/StringUtil.js
 */
'use strict';

export default class StringUtil {
  static trim(text) {
    if (typeof text === 'string') {
      return text.replace(/^\s*|\s*$/g, '');
    } else {
      return text;
    }
  }
}
