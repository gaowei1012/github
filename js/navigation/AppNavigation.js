/*
 * @Author: your name
 * @Date: 2019-12-29 08:47:17
 * @LastEditTime: 2019-12-29 08:58:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/js/navigation/AppNavigation.js
 */
'use strict';

import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {connect} from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import WeclomePage from '../pages/WelcomePage/WelcomePage';
import HomePage from '../pages/HomePage/HomePage';
import PropularPage from '../pages/PropularPage/PropularPage';
import HotPage from '../pages/HotPage/HotPage';

export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
  WeclomePage: {
    screen: WeclomePage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  PropularPage: {
    screen: PropularPage,
    navigationOptions: {
      header: null,
    },
  },
  HotPage: {
    screen: HotPage,
    navigationOptions: {
      header: null,
    },
  },
});

export const RootNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    },
    {
      navigationOptions: {
        header: null,
      },
    },
  ),
);

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
