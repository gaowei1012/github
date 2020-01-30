/*
 * @Author: your name
 * @Date: 2019-12-28 14:53:49
 * @LastEditTime: 2019-12-29 09:09:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/js/App.js
 */
'use strict';
import React, {Component} from 'react';
import store from './store/index';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigation from './navigation/AppNavigation';

export default class App extends Component {
  fixViewPagerAndroid = () => {
    // eslint-disable-next-line dot-notation
    YellowBox.ignoreWarnings['ViewPagerAndroid'];
  };

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
