/*
 * @Author: your name
 * @Date: 2019-12-29 16:43:28
 * @LastEditTime : 2019-12-29 16:47:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/model/TrendingRepoModel.js
 */
'use strict';

export default class TrendingRepoModel {
  constructor(
    fullNmae,
    url,
    description,
    language,
    meta,
    contributors,
    contributorsUrl,
  ) {
    this.fullNmae = fullNmae,
    this.url = url,
    this.description = description,
    this.language = language,
    this.meta = meta,
    this.contributors = contributors,
    this.contributorsUrl = contributorsUrl,
  }
}
