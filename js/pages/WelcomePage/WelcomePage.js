/*
 * @Author: your name
 * @Date: 2019-12-28 15:25:43
 * @LastEditTime: 2019-12-29 19:29:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/js/pages/WelcomePage/WelcomePage.js
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.init();
  }
  init() {
    this.timer = setTimeout(() => {
      NavigationUtil.restToHomePage({
        navigation: this.props.navigation,
      });
    }, 30);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>欢迎</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
