/*
 * @Author: your name
 * @Date: 2019-12-29 16:52:33
 * @LastEditTime : 2019-12-29 16:57:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/model/GitHubTrending.js
 */
'use strict';
import TrendingUtil from './TrendingUtil';

export default class GitHubTrending {
  GitHubTrending() {
    //Singleton pattern
    if (typeof GitHubTrending.instance === 'object') {
      return GitHubTrending.instance;
    }
    GitHubTrending.instance = this;
  }
  fetchTrending(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.text())
        .catch(error => {
          reject(error);
          console.log(error);
        })
        .then(responseData => {
          try {
            resolve(TrendingUtil.htmlToRepo(responseData));
          } catch (e) {
            reject(e);
          }
        })
        .done();
    });
  }
}
