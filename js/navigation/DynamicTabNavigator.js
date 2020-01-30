/* eslint-disable no-shadow */
'use strict';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  createAppContainer,
  BottomTabBar,
  createBottomTabNavigator,
} from 'react-navigation';

import AboutPage from '../pages/AboutPage/AboutPage';
import HotPage from '../pages/HotPage/HotPage';
// import IndexPage from '../pages/IndexPage/IndexPage';
import PropularPage from '../pages/PropularPage/PropularPage';

const TABS = {
  PropularPage: {
    screen: PropularPage,
    navigationOptions: {
      tabBarLabel: '推荐',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/home.png')}
            selectedImage={require('../images/tab/sele_home.png')}
          />
        );
      },
    },
  },
  HotPage: {
    screen: HotPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/shop.png')}
            selectedImage={require('../images/tab/sele_shop.png')}
          />
        );
      },
    },
  },
  AboutPage: {
    screen: AboutPage,
    navigationOptions: {
      tabBarLabel: '关于',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/me.png')}
            selectedImage={require('../images/tab/sele_me.png')}
          />
        );
      },
    },
  },
};

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavgator() {
    /// 如果有当前Tabs
    if (this.Tabs) {
      return this.Tabs;
    }
    const {PropularPage, HotPage, AboutPage} = TABS;
    const tabs = {PropularPage, HotPage, AboutPage};
    // IndexPage.navigationOptions.tabBarLabel = '首页';
    return (this.Tabs = createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent {...props} theme={this.props.theme} />;
      },
    }));
  }

  render() {
    // 保存navigation为了后面调用
    //console.log(this.props.navigation);
    const Tab = createAppContainer(this._tabNavgator());
    return <Tab />;
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />;
  }
}

class TabBarItem extends React.Component {
  render() {
    return (
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{tintColor: this.props.tintColor, width: 25, height: 25}}
        source={
          this.props.focused ? this.props.selectedImage : this.props.normalImage
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
