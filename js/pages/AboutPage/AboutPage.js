/*
 * @Author: your name
 * @Date: 2019-12-28 15:22:29
 * @LastEditTime : 2019-12-29 17:21:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/pages/AboutPage/AboutPage.js
 */
'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopNavigationBar from '../../common/TopNavigationBar';
import THEME_DEFAULT from '../../common/THEME_DEFAULT';
import actions from '../../action/index';
import {connect} from 'react-redux';
import {BASE_URL, REPOS} from '../../expand/config';

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    const {onLoadUserRepos, onLoadDetailRepo} = this.props;
    let url = BASE_URL + '/users/' + 'gmw-zjw' + REPOS;
    let detailUrl = BASE_URL + REPOS + '/' + 'gmw-zjw/awesome-spider';
    console.log('url', detailUrl);
    onLoadUserRepos(url);
    onLoadDetailRepo(detailUrl);
  }
  _renderTopBar() {
    let statusbar = {
      backgroundColor: THEME_DEFAULT.DEFAULT_COLOR,
      barStyle: 'light-content',
    };
    return (
      <TopNavigationBar
        title="关于"
        statusBar={statusbar}
        style={{backgroundColor: THEME_DEFAULT.DEFAULT_COLOR}}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        <Text>关于</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos,
  detailRepo: state.detailRepo,
});

const mapDispatchToProps = dispatch => ({
  onLoadUserRepos: url => dispatch(actions.onLoadUserRepos(url)),
  onLoadDetailRepo: url => dispatch(actions.onLoadDetailRepo(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
