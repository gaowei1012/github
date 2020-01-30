/*
 * @Author: your name
 * @Date: 2019-12-28 15:25:09
 * @LastEditTime : 2019-12-29 19:35:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github/js/pages/PropularPage/PropularPage.js
 */
'use strict';
import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import TopNavigationBar from '../../common/TopNavigationBar';
import THEME_DEFAULT from '../../common/THEME_DEFAULT';
import {connect} from 'react-redux';
import actions from '../../action/index';
import {BASE_URL, REPOS} from '../../expand/config';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import {px2dp} from '../../utils/px2dp';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_KEY = '&sort=stars';

export default class PropularPage extends Component {
  constructor(props) {
    super(props);
    this.tabName = [
      'Java',
      'Android',
      'IOS',
      'React',
      'Python',
      'ReactNative',
      'Vue',
    ];
  }
  _genTabs() {
    const tabs = {};
    this.tabName.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTabPage {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  }
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
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(this._genTabs(), {
        tabBarOptions: {
          tabStyle: styles.tabStyles,
          upperCaseLabel: false, // 是否将标签转为大写
          scrollEnabled: true, // 滚动
          style: {
            backgroundColor: '#678',
          },
          indicatorStyle: styles.indicatorStyle, // 指示器样式
          labelStyle: styles.labelStyle, // 文字样式
        },
      }),
    );
    return (
      <View style={styles.container}>
        {this._renderTopBar()}
        <TabNavigator />
      </View>
    );
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props);
    const {tabLabel} = this.props;
    this.storeNmae = tabLabel;
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    const {onLoadPropularData} = this.props;
    const url = this.genFetachUrl(this.storeNmae);
    onLoadPropularData(this.storeNmae, url);
  }
  genFetachUrl(key) {
    return URL + key + QUERY_KEY;
  }
  renderItem(data) {
    const item = data.items;
    console.log('item ----', item);
    return (
      <View style={{marginBottom: px2dp(10)}}>
        {/* <Text style={{backgroundColor: '#fff'}}>{JSON.stringify(item)}</Text> */}
        <Text>hello</Text>
      </View>
    );
  }
  render() {
    const {popular} = this.props;
    console.log('popluar:', popular);
    let store = popular[this.storeNmae];
    if (!store) {
      store = {
        items: [],
        isLoading: false,
      };
    }
    return (
      <View style={styles.container}>
        {/* <FlatList
          data={store.items}
          renderItem={data => this.renderItem(data)}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  popular: state.popular,
});

const mapDispatchToProps = dispatch => ({
  onLoadPropularData: (storeNmae, url) =>
    dispatch(actions.onLoadPropularData(storeNmae, url)),
});

const PopularTabPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopularTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: px2dp(22),
  },
  tabStyles: {
    minWidth: px2dp(50),
  },
  indicatorStyle: {
    height: px2dp(2),
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: px2dp(13),
    marginTop: px2dp(6),
    marginBottom: px2dp(6),
  },
});
