import React from 'react'
import { StackNavigator } from 'react-navigation'

import SearchScreen from './../Containers/SearchScreen'
import SearchResult from './../Containers/SearchResult'

const AppNavigation = StackNavigator(
  {
    MainScreen: {screen: SearchScreen},
    ResultScreen: {screen: SearchResult},

  },
  {
    headerMode: 'none'
  }
);

export default AppNavigation
