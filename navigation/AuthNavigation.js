import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigation = StackNavigator({
  Login: {
    screen: LoginScreen
  }
}, {headerMode: 'none'})

export default AuthNavigation;