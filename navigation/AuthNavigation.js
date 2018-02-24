import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigation = StackNavigator({
  Login: {
    screen: LoginScreen
  }
}, {headerMode: 'none'})

export default AuthNavigation;