import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#DA552F'
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
  }
}

const NavStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions
  },
  Product: {
    screen: Product,
    navigationOptions
  }
});



const AppContainer = createAppContainer(NavStack);

export default AppContainer;
