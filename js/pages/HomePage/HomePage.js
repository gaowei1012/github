/*
 * @Author: your name
 * @Date: 2019-12-28 15:24:32
 * @LastEditTime : 2019-12-29 09:08:12
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/pages/HomePage/HomePage.js
 */
'use strict';
import React, {Component} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import DynamicTabNavigator from '../../navigation/DynamicTabNavigator';

export default class HomePage extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  // 安卓物理返回键
  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  };

  componentWillMount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}
