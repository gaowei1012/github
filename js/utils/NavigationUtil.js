/*
 * @Author: your name
 * @Date: 2019-12-18 13:57:29
 * @LastEditTime : 2019-12-29 09:08:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hehechaojidaxue/js/utils/NavigationUtil.js
 */

'use strict';

export default class NavigationUtil {
  /**
   * 回退上一级页面
   * @param {any} params
   * @param {elm} page
   */
  static goPage(params, page) {
    let navigation = NavigationUtil.navigation;
    if (!navigation) {
      return;
    }
    navigation.navigate(page, {...params});
  }
  /**
   * 重置到首页
   * @param {params} params params
   */
  static restToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }

  /**
   * 跳转到上一级页面
   * @param navigation
   * @returns {null}
   */
  static goBack(navigation) {
    if (!navigation) {
      console.log('navigation not final');
      return null;
    }
    navigation.goBack();
  }
}
