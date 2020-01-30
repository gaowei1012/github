/*
 * @Author: your name
 * @Date: 2019-12-28 15:24:42
 * @LastEditTime : 2019-12-29 09:21:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/pages/HotPage/HotPage.js
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopNavigationBar from '../../common/TopNavigationBar';
import THEME_DEFAULT from '../../common/THEME_DEFAULT';

export default class AboutPage extends Component {
  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="最热"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        <Text>最热</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
