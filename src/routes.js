import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const NavStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F'
      },
      headerTintColor: '#FFF'
    }
  }
});

const AppContainer = createAppContainer(NavStack);

export default AppContainer;
