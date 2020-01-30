/*
 * @Author: your name
 * @Date: 2019-12-24 10:36:14
 * @LastEditTime : 2019-12-29 09:33:22
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hehechaojidaxue/js/expand/request.js
 */
'use strict';

import axios from 'axios';

export const request = (url, method) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
    })
      .then(result => {
        if (result !== null && result.status !== 200) return;
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
