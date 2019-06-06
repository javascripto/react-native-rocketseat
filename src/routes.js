import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const NavStack = createStackNavigator({
  Main
});

export default createAppContainer(NavStack);
